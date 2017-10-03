import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Routes from '../routes';
import * as Actions from '../actions';
import configStore from '../store/configStore';

// const store = createStore(configStore);
console.log('store', store)

const store = configStore();

console.log('store2', store)
const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default withRouter(connect(null, mapDispatchToProps)(Root));

// export default withRouter(connect(null, null)(Root));
// import ReactDOM from 'react-dom';
// const Home = () => {
//   <div>
//     <h1> hello </h1>
//   </div>
// }
// // const App = () => {
// //   <Home />
// // }

// // ReactDOM.render(<App />, document.getElementById('app'));

// ReactDOM.render((
//  <BrowserRouter>
//    <Home />
//  </BrowserRouter>
//  ), document.getElementById('app'));

// import React, { PureComponent } from 'react';
