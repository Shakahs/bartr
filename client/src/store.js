import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

function createStoreWithMiddleware (prevState) {
  const middleware = [thunk, logger];
  const store = createStore(
    rootReducer,
    prevState,
    applyMiddleware(...middleware)
  )

//   if (module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./reducers/index', () => {
//       const nextRootReducer = require('./reducers/index');
//       store.replaceReducer(nextRootReducer);
//     });
//   }
//
  return store
};

export default createStoreWithMiddleware();
