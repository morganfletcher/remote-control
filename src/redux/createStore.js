'use strict';

import { createStore, combineReducers } from 'redux';
import * as reducers from './reducers';

export default function() {
  let reducerCombo = combineReducers(reducers);
  let store = createStore(reducerCombo);
  return store;
}