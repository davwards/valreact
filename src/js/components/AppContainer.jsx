import React from 'react';
import ValchemyStore from '../stores/ValchemyStore';
import ActionCreator from '../actions/TodoActionCreators';
import App from './App.jsx';

export default React.createClass({
  _onChange() {
    this.setState(ValchemyStore.getAll());
  },

  getInitialState() {
    console.log(ValchemyStore.getAll());
    return ValchemyStore.getAll();
  },

  componentDidMount() {
    ValchemyStore.addChangeListener(this._onChange);
  },

  componentWillUnmount() {
    ValchemyStore.removeChangeListener(this._onChange);
  },

  render() {
    return (
      <App stateOfTheWorld={this.state.stateOfTheWorld}/>
    );
  }
});
