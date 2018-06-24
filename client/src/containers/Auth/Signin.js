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

class Signin extends Component {
  _onFormSubmit = formValues => {
    this.props.signinUser(formValues, () => {
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
          <ErrorMessage>{this.props.errorMessage}</ErrorMessage>
          <Button type="submit">Submit</Button>
        </Form>
      </CenteredContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    errorMessage: state.auth.errorMessage
  };
};

export default reduxForm({
  form: "signin"
})(connect(mapStateToProps, actions)(Signin));
