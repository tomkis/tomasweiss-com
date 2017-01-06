import 'isomorphic-fetch';
import isProduction from 'helpers/isProduction';

import server from './server';

let Root = require('../components/Root').default;
let rootReducer = require('../reducers/rootReducer').default;
let rootSaga = require('../sagas/rootSaga').default;

if (!isProduction && module.hot) {
  module.hot.addStatusHandler((status) => {
    if (status === 'abort') {
      console.log('Killing server because of HMR abortion');
      process.exit(42);
    }
  });

  module.hot.accept('../components/Root', () => {
    Root = require('components/Root').default;
  });

  module.hot.accept('../reducers/rootReducer', () => {
    rootReducer = require('reducers/rootReducer').default;
  });

  module.hot.accept('../sagas/rootSaga', () => {
    rootSaga = require('sagas/rootSaga').default;
  });
}

const dependencyProvider = {
  getRoot: () => Root,
  getRootReducer: () => rootReducer,
  getRootSaga: () => rootSaga
};

server(dependencyProvider);
