import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';

import add from './jobAddReducer'
import display from './jobDisplayReducer'

export default combineReducers({
  auth, add, display,
  form: formReducer
});
