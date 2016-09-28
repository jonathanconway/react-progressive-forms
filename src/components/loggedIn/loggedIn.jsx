import React from 'react';
import { Link } from 'react-router';

export default class LoggedIn extends React.Component {
  render () {
    return <main>
        <h2>Success!</h2>

        <p>You should see this page after successfully logging in.</p>

        <p>Click <Link to="/">Home</Link> to go back home.</p>
    </main>;
  }
}