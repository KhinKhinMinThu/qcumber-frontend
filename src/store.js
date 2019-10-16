import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { composeWithDevTools } from "redux-devtools-extension"; // eslint-disable-line import/no-extraneous-dependencies
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";
// import { connectRouter, routerMiddleware } from "connected-react-router";

import logger from "redux-logger";
import rootReducer from "./reducers";

import rootSaga from "./sagas";

export const history = createBrowserHistory({
  forceRefresh: true
});
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer, // new root reducer with router state
  composeWithDevTools(applyMiddleware(sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
