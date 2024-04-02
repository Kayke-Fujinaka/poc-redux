import { combineReducers } from "@reduxjs/toolkit";

import counterReducer from "../ducks/counter";

export default combineReducers({
  counter: counterReducer,
});
