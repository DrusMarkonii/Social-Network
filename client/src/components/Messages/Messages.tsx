import React from 'react';
import './Messages.css';
import Dialog from './Dialog/Dialog';
import DialogMassage from './Dialog/DialogMassage';

const Messages: React.FC = () => (
  <div className='messages'>
    <div className='dialogBox'>
      <Dialog username='Drus' id={1} />
      <Dialog username='Rob' id={2} />
      <Dialog username='Bob' id={3} />
    </div>
    <div className='messagesBox'>
      <DialogMassage message='Ok. buy!'/>
      <DialogMassage message='how are you?'/>
      <DialogMassage message='Hello'/>
    </div>
  </div>
);

export default Messages;
