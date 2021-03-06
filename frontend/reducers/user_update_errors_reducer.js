import {
  RECEIVE_USER_ERRORS,
  EDIT_USER,
} from '../actions/user_actions';
import { CLOSE_MODAL } from '../actions/modal_actions';

const _nullErrors = {};

const UpdateUserErrorsReducer = (state = _nullErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER_ERRORS:
      return action.errors;
    case EDIT_USER:
      return _nullErrors;
    case CLOSE_MODAL:
      return _nullErrors;
    default:
      return state;
  }
};

export default UpdateUserErrorsReducer;