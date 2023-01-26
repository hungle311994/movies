import thunk from "redux-thunk";
import { rootReducer } from "../redux/reducers/rootReducer";
const { createStore, applyMiddleware, compose } = require("redux");

const middleware = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f
);

export const store = createStore(rootReducer, middleware);
