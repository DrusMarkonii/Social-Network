import React from 'react';
import ReactDOM from 'react-dom';
// import './index.scss';
import { Provider } from 'react-redux';
// import App from './components/App/App';
// import store1 from './redux/state';
import store from './reducers/index';

ReactDOM.render(
  <Provider store={store}>
    {/* <App appState={store1.getState()} addPost={store1.addPost} /> */}
    <h1>hello</h1>
  </Provider>,
  document.getElementById('root')
);
