import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
// import Provider from 'react-redux';
import App from './components/App/App';
import store1 from './redux/state';
// import store from './reducers';

ReactDOM.render(
  <App appState={store1.getState()} addPost={store1.addPost} />,
  document.getElementById('root')
);
