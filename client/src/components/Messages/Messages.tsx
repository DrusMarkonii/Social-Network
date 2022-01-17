import React from 'react';
import Dialog from './Dialog/Dialog';

const Messages: React.FC = () => (
  <div className='messages'>
    <Dialog username='Jane' message='HI, it is JANE'/>
    <Dialog username='Jon' message='HI, it is Jon'/>
    <Dialog username='Andrei' message='HI, it is Andrei'/>
    <Dialog username='Bob' message='HI, it is Bob'/>
    <Dialog username='Rob' message='HI, it is Rob'/>
    <Dialog username='Rome' message='HI, it is Rome'/>
  </div>
);

export default Messages;
