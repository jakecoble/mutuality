import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import 'normalize.css';

import store from './store';
import App from './containers/App';

const history = createBrowserHistory();
const appStore = store(history);

ReactDOM.render(
  <Provider store={appStore}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('app')
);
