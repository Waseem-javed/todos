import { combineReducers } from "@reduxjs/toolkit";

// all reducers will be import here
import todoReducer, { TodoSelector } from "./todoReducer";

const appReducer = combineReducers({
  todo: todoReducer,
});

export { TodoSelector };

export const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default appReducer;
