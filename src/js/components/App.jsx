import React from 'react';
import ValchemyStore from '../stores/ValchemyStore';
import ValchemyInput from "./ValchemyInput.jsx";
import UserFeedback from "./UserFeedback.jsx";

export default React.createClass({
  getInitialState() {
    return {
      validity: null,
      errors: [],
    }
  },

  componentDidMount: function() {
    ValchemyStore.addChangeListener(this.updateState);
  },

  updateState: function() {
    this.setState({
      validity: ValchemyStore.isValid(),
      errors: ValchemyStore.getErrors()
    });
  },

  render() {
    return (
      <div className="card">
        <div className="card-block">
          <h4 className="card-title">Maxlength Validator</h4>
          <p className="card-text">Enter up to 10 characters and press <strong>Validate</strong></p>
          <ValchemyInput validity={this.state.validity}/>
          <UserFeedback errors={this.state.errors} />
        </div>
      </div>
    );
  }
});
