import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./index";
import { rootSaga } from "../sagas";
import createSagaMiddleware from "redux-saga";
/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = () =>
  createStore(
    rootReducer,
    {},
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

// const configureStore = (preloadedState) =>
//   createStore(rootReducer, composeEnhancers());

const store = configureStore({});

sagaMiddleware.run(rootSaga);

export default store;
