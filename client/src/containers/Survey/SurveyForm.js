import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import formFields from "containers/Survey/formFields";
import Input from "components/InputText";
import { Link } from "react-router-dom";

class SurveyForm extends Component {
  renderFormFields = () => {
    return formFields.map(({ label, name }) => {
      return (
        <Field
          key={name}
          component={Input}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFormFields()}
          <Link to="/surveys">Cancel</Link>
          <button type="submit">Next</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
