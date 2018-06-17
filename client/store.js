import { createStore, compose, applyMiddleware } from 'redux';
import { middleware as reduxPackMiddleware } from 'redux-pack';
import { connectRouter, routerMiddleware } from 'connected-react-router';

import reducers from './reducers';

export default history => {
  return createStore(
    connectRouter(history)(reducers),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    compose(
      applyMiddleware(
        routerMiddleware(history),
        reduxPackMiddleware
      )
    )
  );
};
