import React, { Component } from "react";
import { connect } from "react-redux";

class Dashboard extends Component {
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push("/");
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

export default connect(mapStateToProps, null)(Dashboard);
