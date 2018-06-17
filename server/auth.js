import { User } from '../db/models';

export default {
  login (username, password, done) {
    User.findOne({
        where: {
          email: username
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
