import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";

export const rootReducer = combineReducers({
  moviesRedux: moviesReducer,
});
