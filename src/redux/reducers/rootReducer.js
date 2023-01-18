import { combineReducers } from "redux";
import { modalReducer } from "./modalReducer";
import { moviesReducer } from "./moviesReducer";
import { tvReducer } from "./tvReducer";

export const rootReducer = combineReducers({
  moviesRedux: moviesReducer,
  tvRedux: tvReducer,
  modalRedux: modalReducer,
});
