import React, { Component } from "react";
import { connect } from "react-redux";

export default function(ComposedComponent) {
  class isAuthenticated extends Component {
    state = {};
    componentDidMount() {
      if (!this.props.isAuthenticated) {
        this.props.history.push("/");
      }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (!nextProps.isAuthenticated) {
        nextProps.history.push("/");
      }
      return null;
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.auth.isAuthenticated
    };
  };

  return connect(
    mapStateToProps,
    null
  )(isAuthenticated);
}
