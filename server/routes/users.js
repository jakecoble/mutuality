import express from 'express';
import passport from 'passport';

import { User } from '../../db/models';

const router = express.Router();

router.post('/create',
            passport.authenticate('local-signup'),
            function (req, res) {
              var {
                firstName,
                lastName
              } = req.user;

              res.json({ firstName, lastName });
            });

router.post('/login',
            passport.authenticate('local-login'),
            function (req, res) {
              var {
                firstName,
                lastName
              } = req.user;

              res.json({ firstName, lastName });
            });

export default router;
