import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import {
  Form,
  CenteredContainer,
  Button,
  ErrorMessage
} from "components/StyledComponents";
import Input from "components/InputText";
import { required } from "helpers/inputValidation";

class SurveyNew extends Component {
  _onFormSubmit = formValues => {
    console.log(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a new survey</h3>
        {/* NOTE: Create constants.js to hold all the values of label of different forms */}
        <CenteredContainer>
          <Form onSubmit={this.props.handleSubmit(this._onFormSubmit)}>
            <Field
              name="title"
              component={Input}
              type="text"
              label="Title"
              validate={[required]}
            />
            <Field
              name="subject"
              component={Input}
              type="text"
              label="Subject"
              validate={[required]}
            />
            <Field
              name="body"
              component={Input}
              type="text"
              label="Body"
              validate={[required]}
            />
            <Field
              name="recipients"
              component={Input}
              type="text"
              label="Recipient List"
              validate={[required]}
            />
            <Button type="submit">Submit</Button>
          </Form>
        </CenteredContainer>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyNew"
})(SurveyNew);
