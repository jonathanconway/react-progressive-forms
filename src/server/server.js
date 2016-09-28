import express from 'express';
import Path from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';
import Guid from 'guid';

import HomeServer from '../components/home/home.Server.js';
import LoginServer from '../components/login/login.Server.js';
import LoggedInServer from '../components/loggedIn/loggedIn.Server.js';

/**
 * Serves the IDP application
 */
{
  const app = express();

  app.use('/output/public', express.static('output/public'));
  app.use('/assets', express.static('assets'));

  app.use(session({
    secret: Guid.raw(),
    resave: false,
    saveUninitialized: true
  }));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded());

  (new HomeServer(app));
  (new LoginServer(app));
  (new LoggedInServer(app));

  console.log("Listening on port 4001...");
  app.listen(4001);
}