import React, { Component } from "react";
import { connect } from "react-redux";

import { submitSurvey } from "actions/survey_actions";
import { getCurrentUser } from "actions/auth_actions";

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/");
    } else {
      this.props.getCurrentUser();
    }
  }

  render() {
    return (
      <div>
        <p>Main dashboard</p>
        <p>Main dashboard</p>
        <p>Main dashboard</p>
        <p>Main dashboard</p>
        <p>Main dashboard</p>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps, { getCurrentUser, submitSurvey })(
  Dashboard
);
