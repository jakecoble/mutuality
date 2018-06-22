import { User } from '../db/models';

export default {
  signup (req, email, password, done) {
    var {
      firstName,
      lastName
    } = req.body;

    User.findOne({
        where: {
          email
        }
      })
      .then(user => {
        if (user) {
          return done(null, false, { message: 'That email is already registered.' });
        } else {
          return User.create({
            firstName,
            lastName,
            email,
            password
          });
        }
      })
      .then(user => done(null, user));
  },

  login (email, password, done) {
    User.findOne({
        where: {
          email
        }
      })
      .then(user => {
        if (user.validPassword(password)) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid password' });
        }
      })
      .catch(() => done(null, false, { message: 'Email not registered' }));
  },

  serializeUser (user, done) {
    done(null, user.id);
  },

  deserializeUser (id, done) {
    User.findById(id)
      .then(user => done(null, user))
      .catch(err => done(err, false));
  }
};
