import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "actions/survey_actions";

class Answer extends Component {
  // NOTE: check if recipient exists by the id from url

  state = { rating: 0, review: "" };

  setRating = e => {
    this.setState({ rating: e.target.value });
  };

  setReview = e => {
    this.setState({ review: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const recipientId = this.props.location.pathname.split("/")[3];
    this.props.submitRecipientAnswer({
      rating: this.state.rating,
      review: this.state.review,
      recipientId
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div onChange={this.setRating}>
            <input type="radio" name="answer" value="great" />Great<br />
            <input type="radio" name="answer" value="good" />Good<br />
            <input type="radio" name="answer" value="normal" />Normal<br />
            <input type="radio" name="answer" value="bad" />Bad<br />
            <input type="radio" name="answer" value="terrible" />Terrible<br />
          </div>
          <textarea
            name="review"
            id=""
            cols="30"
            rows="10"
            onChange={this.setReview}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Answer);
