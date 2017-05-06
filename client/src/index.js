import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './bartr';
import { AppContainer } from 'react-hot-loader'
// import createStoreWithMiddleware from './store';

// if (module.hot) {
//   console.log('try hot reload')
//   module.hot.accept('./bartr.js', () => {
//     const NextRootContainer = require('./bartr.js').default;
//     render(<NextRootContainer />, document.getElementById('app'));
//   })
// }

// ReactDOM.render(<Routing/>, document.getElementById('app'));

ReactDOM.render(
  <AppContainer>
    <Routing/>
  </AppContainer>,
  document.getElementById('app')
);


// // Hot Module Replacement API
// if (module.hot) {
//   module.hot.accept('./bartr', () => {
//     const NextApp = require('./bartr').default;
//     ReactDOM.render(
//       <AppContainer>
//         <Routing/>
//       </AppContainer>,
//       document.getElementById('app')
//     );
//   });
// }

if (module.hot) {
  module.hot.accept();

  // fix hot module replacement for reducers
  module.hot.accept('./store', () => {
    const store = require('./store');

    store.replaceReducer(store);
  });
}