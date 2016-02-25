import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

/* eslint-disable no-console */

export default {
  updateInputValue(text) {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.INPUT_UPDATED,
      text: text
    });
  },
  validateInput() {
    Dispatcher.handleViewAction({
      type: Constants.ActionTypes.VALIDATION_REQUEST,
    });
  },
};
