import { combineReducers } from 'redux';

import { lenguageReducer } from './reducer';

export const rootReducer = combineReducers({
  lenguage: lenguageReducer
  
});


