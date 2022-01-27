import React, {useEffect, useState} from 'react';
import axios from 'axios';
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

  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:5000/friends',
      );
      
      setUsers(result.data);
    };
    fetchData()
  }, [])


  const DialogsItems = users.map((user) => (
    <Dialog userName={user.userName} id={user.userName} key={user.userName} />
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
