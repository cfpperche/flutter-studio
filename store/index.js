import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import createReducer from './reducers';

const loggerMiddleware = createLogger({});

const sagaMiddleware = createSagaMiddleware();

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(
      applyMiddleware(...middleware, loggerMiddleware)
    );
  }
  return applyMiddleware(...middleware);
};

function configureStore(initialState = {}) {
  const store = createStore(
    createReducer,

    initialState,
    bindMiddleware([thunk, sagaMiddleware])
  );

  return store;
}

export default configureStore;
