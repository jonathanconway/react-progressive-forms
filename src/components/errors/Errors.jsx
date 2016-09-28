import React from 'react';

export default class Errors extends React.Component {
  constructor (props) {
    super(props);
  }

  onClickError (e) {
    e.preventDefault();
    this.props.onClickError &&
      this.props.onClickError(e, e.target.href.split('#')[1]);
  }

  focus () {
    this.refs.errors.focus();
  }

  render () {
    return (this.props.errors && Object.keys(this.props.errors).length > 0)
      ? <div className="errors" tabIndex="0" ref="errors">
        <span>Please correct the errors with the following fields:</span>
        <ul>
          {Object.keys(this.props.errors).map((inputName) => {
            return <li key={inputName}>
              <a
                href={'#' + inputName}
                onClick={this.onClickError.bind(this)}>
                  {this.props.labels[inputName]}
              </a>
            </li>
          })}
        </ul>
      </div>
      : null
  }
}