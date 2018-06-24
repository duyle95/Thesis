import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import * as actions from "actions";

import Input from "components/InputText";
import {
  Form,
  CenteredContainer,
  Button,
  ErrorMessage
} from "components/StyledComponents";
import { required, email } from "helpers/inputValidation";

class Signup extends Component {
  _onFormSubmit = formValues => {
    this.props.signupUser(formValues, () => {
      this.props.history.push("/surveys");
    });
  };

  render() {
    return (
      <CenteredContainer>
        <Form onSubmit={this.props.handleSubmit(this._onFormSubmit)}>
          <Field
            name="email"
            component={Input}
            type="email"
            label="Email"
            validate={[required, email]}
          />
          <Field
            name="password"
            component={Input}
            type="password"
            label="Password"
            validate={[required]}
          />
          <Field
            name="passwordConfirm"
            component={Input}
            type="password"
            label="Confirm Password"
            validate={[required]}
          />
          <ErrorMessage>{this.props.errorMessage}</ErrorMessage>
          <Button type="submit">Submit</Button>
        </Form>
      </CenteredContainer>
    );
  }
}

const validate = values => {
  const errors = {};

  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = "Password don't match.";
  }

  return errors;
};

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default reduxForm({
  validate,
  form: "signup"
})(connect(mapStateToProps, actions)(Signup));
