import { combineReducers } from 'redux';

import { languageReducer } from './reducer';

export const rootReducer = combineReducers({
  language: languageReducer
  
});


