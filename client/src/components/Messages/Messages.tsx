import React from 'react';
import './Messages.css';
import Dialog from './Dialog/Dialog';
import DialogMassage from './Dialog/DialogMassage';

type dialogsObjType = {
  id: number;
  username: string;
};

type messagesObjType = {
  id: number;
  message: string;
};

type MessagesType = {
  dialogsData: dialogsObjType[];
  messagesData: messagesObjType[];
}

const Messages = ({dialogsData, messagesData}: MessagesType) => {

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
