import React from 'react';
import './Messages.css';
import Dialog from './Dialog/Dialog';
import DialogMassage from './Dialog/DialogMassage';

const dialogData = [
  { id: 1, username: 'Drus' },
  { id: 2, username: 'Rob' },
  { id: 3, username: 'Bob' },
  { id: 4, username: 'Jon' },
];

const messageData = [
  { id: 1, message: 'Ok. buy!' },
  { id: 2, message: 'What are you doing?' },
  { id: 3, message: 'how are you?' },
  { id: 4, message: 'Hello' },
];

const DialogsItems = dialogData.map((item) => (
  <Dialog username={item.username} id={item.id} key={item.id} />
));

const MessagesItems = messageData.map((item) => (
  <DialogMassage message={item.message} key={item.id} />
));

const Messages: React.FC = () => (
  <div className='messages'>
    <div className='dialogBox'>{DialogsItems}</div>
    <div className='messagesBox'>{MessagesItems}</div>
  </div>
);

export default Messages;
