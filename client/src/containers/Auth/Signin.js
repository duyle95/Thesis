import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import * as actions from '../../actions';

class Signin extends Component {
  _onFormSubmit = (formValues) => {
    this.props.signinUser(formValues);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this._onFormSubmit)}>
          <div>
            <label htmlFor="email">Email</label>
            <Field name="email" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field name="password" component="input" type="password" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field name="confirmPassword" component="input" type="password" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default reduxForm({
  form: 'signin',
})(connect(null, actions)(Signin));
