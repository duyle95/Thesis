import React, { Component } from "react";
import { connect } from "react-redux";
import { findRecipient } from "actions/survey_actions";

class Answer extends Component {
  // this is the component that will be loaded when someone answers the survey
  // this component need to check if the id from url is correct when it first mounts
  // this component renders a form with radio buttons and textarea for optional comments from user
  // after user submit (and some input validation), re render this component and show thank you message if successful, else restart the process
  componentDidMount() {
    const { recipientId } = this.props.match.params;
    this.props.findRecipient(recipientId);
  }
  render() {
    return <div>Answering form</div>;
  }
}

export default connect(null, { findRecipient })(Answer);
