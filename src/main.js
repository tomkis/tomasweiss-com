import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import buildStore from 'store';
import reducer from 'reducers/rootReducer';
import saga from 'sagas/rootSaga';

import './styles/root.less';

let Root = require('components/Root').default;

const store = buildStore(reducer, saga, JSON.parse(window.reduxState));

const doRender = () => {
  render((
    <Provider store={store}>
      <Root />
    </Provider>
  ), document.getElementById('root'));
};

doRender();

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    Root = require('components/Root').default;
    doRender();
  });

  module.hot.accept('./reducers/rootReducer', () => {
    store.replaceReducer(require('reducers/rootReducer').default);
  });
}
