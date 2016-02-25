import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import Validation from '../valchemy/valchemy';

// data storage
let _data = {
  userInput: '',
  result: null
};

function validateInput() {
  var maxLengthValidation = Validation().maxLength(10);
  var validationResult = maxLengthValidation.validate(_data.userInput);
  _data.result = validationResult;
}

// Facebook style store creation.
const ValchemyStore = assign({}, BaseStore, {
  getAll() {
    return {
      stateOfTheWorld: _data
    }
  },
  dispatcherIndex: Dispatcher.register(function handleAction(payload) {
    const action = payload.action;

    switch (action.type) {
    case Constants.ActionTypes.INPUT_UPDATED:
      _data.userInput = action.text;
      ValchemyStore.emitChange();
      break;
    case Constants.ActionTypes.VALIDATION_REQUEST:
      validateInput();
      ValchemyStore.emitChange();
      break;
    }
  })
});

export default ValchemyStore;
