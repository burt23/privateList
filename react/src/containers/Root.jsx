import React from 'react';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { createStore, bindActionCreators } from 'redux';
import Routes from '../routes';
import * as Actions from '../actions';
import store from '../store/configStore';

// const store = createStore(configStore);


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
