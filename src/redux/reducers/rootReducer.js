import { combineReducers } from "redux";
import { trendingReducer } from "./moviesReducer";

export const rootReducer = combineReducers({
  trendingRedux: trendingReducer,
});
