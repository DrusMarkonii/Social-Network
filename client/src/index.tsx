import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';
import store from './redux/state';




ReactDOM.render(
  <App appState={store.getState()} addPost={store.addPost}/>,
  document.getElementById('root')
);
