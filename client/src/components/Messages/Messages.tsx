import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './Messages.css';
import Dialog from './Dialog/Dialog';


const Messages = () => {

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
    // eslint-disable-next-line no-underscore-dangle
    <Dialog userName={user.userName} id={user._id} key={user.userName} />
  ));

  return (
    <div className='messages'>
      <div className='dialogBox'>{DialogsItems}</div>
    </div>
  );
};

export default Messages;
