import express from 'express';
import passport from 'passport';

import { User } from '../../db/models';

const router = express.Router();

router.post('/create',
            passport.authenticate('local-signup'),
            function (req, res) {
              User.findOne({
                where: {
                  email: req.body.email
                }
              })
                .then(user => res.json({ firstName: user.firstName, lastName: user.lastName }));
            });

router.post('/login',
            passport.authenticate('local-login'),
            function (req, res) {
              User.findOne({
                  where: {
                    email: req.body.email
                  }
                })
                .then(user => res.json({ firstName: user.firstName, lastName: user.lastName }));
            });

export default router;
