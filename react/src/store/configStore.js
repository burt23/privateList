import 'babel-polyfill';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga';


import { yatta } from '../sagas/sagas.js';

console.log('yatta ###############33', yatta)
const sagaMiddleware = createSagaMiddleware();

 // eslint-disable no-underscore-dangle 
export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}

sagaMiddleware.run(yatta);

/* eslint-enable */

// window.devToolsExtension ? window.devToolsExtension() : undefined


console.log('module hot', module.hot);
//   // HMR support
//   if (module.hot) {
//     // enable webpack HMR for reducers
//     module.hot.accept('../reducers', () => {
//       const nextRootReducer = require('../reducers').default;
//       store.replaceReducer(nextRootReducer);
//     });
//   }
// }
