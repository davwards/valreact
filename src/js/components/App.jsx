import React from 'react';
import ValchemyInput from "./ValchemyInput.jsx";
import UserFeedback from "./UserFeedback.jsx";

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Learn Flux</h1>
        <ValchemyInput/>
        <UserFeedback/>
      </div>
    );
  }
});
