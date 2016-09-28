import React from 'react';
import { Link } from 'react-router'

export default class Home extends React.Component {
  render () {
    return <main>
        <h2>Welcome.</h2>

        <p>Click <Link to="/login">Login</Link> to log in.</p>
    </main>;
  }
}