import { combineReducers } from 'redux';
import whiskeysReducer from './whiskeysReducer';

export default combineReducers({
  whiskeys: whiskeysReducer,
});
