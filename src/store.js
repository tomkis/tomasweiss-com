/* global devToolsExtension */
import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import isProduction from 'helpers/isProduction';
import isServer from 'helpers/isServer';
import emptyMiddleware from 'helpers/emptyMiddleware';

export default function configureStore(reducer, saga, state = undefined) {
  const sagaMiddleware = createSagaMiddleware();

  let enhancer;
  if (isProduction) {
    enhancer = applyMiddleware(
      sagaMiddleware
    );
  } else {
    enhancer = applyMiddleware(
      sagaMiddleware,
      isServer ? emptyMiddleware : createLogger()
    );

    if (typeof window !== 'undefined' && window.devToolsExtension) {
      enhancer = compose(enhancer, devToolsExtension());
    }
  }
  const store = createStore(reducer, state, enhancer);
  sagaMiddleware.run(saga);

  return store;
}
