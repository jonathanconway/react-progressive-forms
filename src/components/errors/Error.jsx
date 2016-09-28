import React from 'react';

export default class Error extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return this.props.error ?
      <div className="error">{this.props.error}</div> : null
  }
}