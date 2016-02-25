import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';

export default React.createClass({
  feedbackType() {
    return (this.props.errors !== undefined && this.props.errors.length == 0) ?
      'text-success' : 'text-danger';
  },
  render() {
    return (
      <div className="input-feedback">
        <strong className={this.feedbackType()}>{this.props.errors}</strong>
      </div>
    );
  }
});
