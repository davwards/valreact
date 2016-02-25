import React from 'react';
import ActionCreator from '../actions/TodoActionCreators';

export default React.createClass({
  onChange(event) {
    var text = event.target.value;
    ActionCreator.updateInputValue(text);
  },

  validateInput() {
    ActionCreator.validateInput();
  },

  render() {
    return (
      <div className="input-group">
        <input onChange={this.onChange} type="text" className="form-control" placeholder="Enter some text..."/>
        <span className="input-group-btn">
          <button onClick={this.validateInput} className="btn btn-default" type="button">Validate</button>
        </span>
      </div>
    );
  }
});
