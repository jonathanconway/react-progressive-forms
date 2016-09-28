import React from 'react';
import { Redirect, Link, Match } from 'react-router';

import { submitForm, handleSubmitResponse } from '../forms/forms';
import Errors from '../errors/errors.jsx';
import Error from '../errors/error.jsx';

/**
 * Client-side component for Login screen
 */
class Login extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.state =
      (this.context &&
       this.context.model) || {
        emailAddress: null,
        password: null,
        errors: {}
      };
  }

  componentDidMount() {
    // focus on the first field so user can begin typing
    this.refs.emailAddress.focus();
  }

  onClickError (e, inputName) {
    this.refs[inputName].focus();
  }

  /**
   * Submit the credentials for verification
   */
  onSubmitLoginForm (e) {
    e.preventDefault();
    submitForm(e.target).then(handleSubmitResponse.bind(this));
  }

  render () {
    const labels = {
      emailAddress: 'Email Address',
      password: 'Password'
    };

    return <main>
      <form
        action="/login"
        method="post"
        ref="loginForm"
        name="loginForm"
        onSubmit={this.onSubmitLoginForm.bind(this)}>

        <h2>Login</h2>

        <Errors
          ref="errors"
          errors={this.state.errors}
          labels={labels}
          onClickError={this.onClickError.bind(this)} />

        <p>Please enter your credentials.</p>

        <div>
          <label htmlFor="emailAddress" ref="emailAddressLabel" className="visuallyhidden">{labels.emailAddress}</label>
          <input
            type="text"
            id="emailAddress"
            name="emailAddress"
            ref="emailAddress"
            defaultValue={this.state.emailAddress} />

          <Error error={this.state.errors && this.state.errors.emailAddress} />
        </div>

        <div>
          <label htmlFor="password" ref="passwordLabel" className="visuallyhidden">{labels.password}</label>
          <input
            type="password"
            id="password"
            name="password"
            ref="password"
            defaultValue={this.state.password} />

          <Error error={this.state.errors && this.state.errors.password} />
        </div>

        <div>
          <Link to="/">Back</Link>
          <button ref="login" type="submit">Login</button>
        </div>
      </form>
    </main>
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired,
  model: React.PropTypes.object
};

export default Login;