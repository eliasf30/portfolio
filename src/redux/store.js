import {  createStore } from 'redux';

import { rootReducer } from './root-reducer.js';

const initialState = {};

export const store = createStore(
    rootReducer,
    initialState,
)