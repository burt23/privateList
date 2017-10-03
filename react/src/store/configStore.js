import { createStore } from 'redux';
import rootReducer from '../reducers/index';

/* eslint-disable no-underscore-dangle */
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
  /* eslint-enable */

    // window.devToolsExtension ? window.devToolsExtension() : undefined


  console.log('module hot', module.hot)
//   // HMR support
//   if (module.hot) {
//     // enable webpack HMR for reducers
//     module.hot.accept('../reducers', () => {
//       const nextRootReducer = require('../reducers').default;
//       store.replaceReducer(nextRootReducer);
//     });
//   }
// }
