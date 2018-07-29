import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchSurveys } from "actions/survey_actions";
import { getCurrentUser } from "actions/auth_actions";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    // this.props.fetchSurveys();
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

export default connect(
  mapStateToProps,
  { getCurrentUser, fetchSurveys }
)(Dashboard);
