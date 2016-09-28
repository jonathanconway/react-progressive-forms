import React from 'react';
import { Match, Redirect } from 'react-router';
import Immutable from 'immutable';

import Home from '../home/home.jsx';
import Login from '../login/login.jsx';
import LoggedIn from '../loggedIn/loggedIn.jsx';

/**
 * Wraps the entire application and defines the top-level components,
 * which are routed to URL paths.
 */
class App extends React.Component {
  getChildContext() {
    return { model: this.props.model }
  }

  render() {
    return <div id="app">
      <header>
        <h1>React Progressive Forms Example</h1>
      </header>

      <Match exactly pattern="/" component={Home} />
      <Match pattern="/login" component={Login} />
      <Match pattern="/loggedIn" component={LoggedIn} />
    </div>
  }
}

App.childContextTypes = {
  model: React.PropTypes.object
};

export default App;