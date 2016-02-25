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

  validClass() {
    console.log(this.props.validity);
    if( this.props.validity === null ) return 'input-group';

    if(this.props.validity) {
      return 'input-group has-success';
    } else {
      return 'input-group has-error';
    }
  },

  render() {
    return (
      <div className={this.validClass()}>
        <input onChange={this.onChange} type="text" className="form-control" placeholder="Enter a maximum of 10 characters"/>
        <span className="input-group-btn">
          <button onClick={this.validateInput} className="btn btn-primary" type="button">Validate</button>
        </span>
      </div>
    );
  }
});
