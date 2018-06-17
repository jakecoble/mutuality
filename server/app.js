import 'dotenv/config';

import express from 'express';
const app = express();

import bodyParser from 'body-parser';
import session from 'express-session';
import sqSession from 'connect-session-sequelize';
import { sequelize } from '../db/models';

import crypto from 'crypto';

import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import auth from './auth';
import users from './routes/users';

const port = process.env.PORT || 3000;

if (process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack');
  const webpackConfig = require ('../conf/webpack.dev');
  const compiler = webpack(webpackConfig);
  const WebpackDevMiddleware = require("webpack-dev-middleware");
  const WebpackHotMiddleware = require("webpack-hot-middleware");

  app.use(WebpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
  }));
  app.use(WebpackHotMiddleware(compiler));
}

const SequelizeStore = sqSession(session.Store);

app.use(session({
  store: new SequelizeStore({
    db: sequelize
  }),
  secret: crypto.randomBytes(32).toString('hex'),
  resave: false
}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({
  usernameField: 'email'
}, auth.login));
passport.serializeUser(auth.serializeUser);
passport.deserializeUser(auth.deserializeUser);

app.use('/users', users);

app.get('/client.js', function(req, res) {
  res.sendFile('client.js', { root: __dirname });
});

app.get('/', function(req, res) {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => console.log('listening on port ' + port));
