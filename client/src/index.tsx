import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App/App';

const friendsData = [
  { id: 1, username: 'Jane' },
  { id: 2, username: 'Bob' },
  { id: 3, username: 'James' },
  { id: 4, username: 'Andrei' },
  { id: 5, username: 'Rob' },
  { id: 6, username: 'Adam' },
];

const postsData = [
  {
    id: 1,
    username: 'Drus Markoni',
    message: 'Welcome to AruSNet with Drus',
    likesCount: 5,
  },
  {
    id: 2,
    username: 'Jane Pokr',
    message: 'Welcome to AruSNet with Jane',
    likesCount: 3,
  },
  {
    id: 3,
    username: 'Romale',
    message: 'Welcome to AruSNet with Romale',
    likesCount: 1,
  },
];

const dialogsData = [
  { id: 1, username: 'Drus' },
  { id: 2, username: 'Rob' },
  { id: 3, username: 'Bob' },
  { id: 4, username: 'Jon' },
];

const messagesData = [
  { id: 1, message: 'Ok. buy!' },
  { id: 2, message: 'What are you doing?' },
  { id: 3, message: 'how are you?' },
  { id: 4, message: 'Hello' },
];

ReactDOM.render(
  <App friendsData={friendsData} postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>,
  document.getElementById('root')
);
