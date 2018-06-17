import express from 'express';
import passport from 'passport';

import { User } from '../../db/models';

const router = express.Router();

router.post('/create', function (req, res) {
  var {
    firstName,
    lastName,
    password,
    email
  } = req.body;

  User.create({
        firstName,
        lastName,
        password,
        email
    })
    .then(() => res.sendStatus(200).end())
    .catch((err) => {
      console.log(err);
      res.sendStatus(500).end();
    });
});

router.post('/login',
            passport.authenticate('local'),
            function (req, res) {
              User.findOne({
                  where: {
                    email: req.body.email
                  }
                })
                .then(user => res.json({ firstName: user.firstName, lastName: user.lastName }));
            });

export default router;
