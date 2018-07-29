import React from "react";
import { connect } from "react-redux";
import formFields from "containers/Survey/formFields";
import * as actions from "actions";
import { withRouter } from "react-router-dom";

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  // onCancel: receive as props from parents component SurveyNew => allow cancel function to edit survey details
  // formValues: receive as props from redux 'form' store & mapStateToProps => show up survey details for reviewing
  // submitSurvey: receive as props from redux action creators & mapDispatchToProps => call to action to submit survey
  // history: receive as props from withRouter property of reduxForm => allow redirect after submit survey successfully
  const reviewFields = formFields.map(({ name, label }) => {
    return (
      <div key={name}>
        <label htmlFor="">{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h4>Please review your survey details before sending</h4>
      {reviewFields}
      <button onClick={onCancel}>Back</button>
      <button onClick={() => submitSurvey(formValues, history)}>
        Submit Survey
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    formValues: state.form.surveyForm.values
  };
};

export default connect(
  mapStateToProps,
  actions
)(withRouter(SurveyFormReview));
