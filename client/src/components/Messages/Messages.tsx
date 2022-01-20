import React from 'react';
import './Messages.css';
import Dialog from './Dialog/Dialog';
import DialogMassage from './Dialog/DialogMassage';

const Messages = () => {
  const messagesData = [
    { id: 1, message: 'Ok. buy!' },
    { id: 2, message: 'What are you doing?' },
    { id: 3, message: 'how are you?' },
    { id: 4, message: 'Hello' },
  ];
  const dialogsData = [
    { id: 1, username: 'Drus' },
    { id: 2, username: 'Rob' },
    { id: 3, username: 'Bob' },
    { id: 4, username: 'Jon' },
  ];

  const DialogsItems = dialogsData.map((user) => (
    <Dialog username={user.username} id={user.id} key={user.id} />
  ));

  const MessagesItems = messagesData.map((dialog) => (
    <DialogMassage message={dialog.message} key={dialog.id} />
  ));
  return (
    <div className='messages'>
      <div className='dialogBox'>{DialogsItems}</div>
      <div className='messagesBox'>{MessagesItems}</div>
    </div>
  );
};

export default Messages;
