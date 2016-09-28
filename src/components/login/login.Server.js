import { rerender, redirect } from '../../server/utils';
import serverSideRender from '../../server/serverSideRender';
import { checkEmailAddressValid } from './login.js';

export default class LoginServer {
  constructor(app) {
    app.get('/login', (req, res, next) => {
      const model = JSON.parse(JSON.stringify(req.session.model || {}));
      req.session.model = null;

      serverSideRender(req, res, model);
    });

    /**
     * Log the user in
     */
    app.post('/login', (req, res, next) => {
      var model = {
        emailAddress: req.body.emailAddress,
        password: req.body.password,
        errors: {}
      };

      if (!(req.body.emailAddress)) {
        model.errors.emailAddress = 'Please enter an Email Address.';
      }

      if (!(req.body.password)) {
        model.errors.password = 'Please enter a Password.';
      }

      if (!(model.errors.emailAddress) && !(checkEmailAddressValid(req.body.emailAddress))) {
        model.errors.emailAddress = 'Please enter a valid Email Address.';
      }

      // if errors, then re-render
      if (Object.keys(model.errors).length > 0) {
        rerender(req, res, model);
        return;
      }

      redirect(req, res, '/loggedIn', model);
    });
  }
}