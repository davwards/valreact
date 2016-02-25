import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import BaseStore from './BaseStore';
import assign from 'object-assign';
import Validation from '../valchemy/valchemy';

// data storage
let _data = {
  userInput: '',
  result: null,
  inputValidity: false
};

function validateInput() {
  var maxLengthValidation = Validation()
      .maxLength(10)
      .withMessage("A custom message to help you out (Max 10 characters allowed, homeboy)!");

  var validationResult = maxLengthValidation.validate(_data.userInput);
  _data.result = validationResult;

  if( ! _data.result.valid ) {
    _data.inputValidity = false;
    _data.errors = _data.result.errors;
  }
}

const ValchemyStore = assign({}, BaseStore, {
  isValid: function() {
    return _data.result && _data.result.valid;
  },
  getErrors: function() {
    if(_data.result) {
      console.log(_data.result.errors);
      return _data.result.errors;
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
