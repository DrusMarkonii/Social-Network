import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Friends.css'

import Friend from './Friend/Friend';

const UserList: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/friends');

      setUsers(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/friends');

      setUsers(result.data);
    };
    fetchData();
  }, [isSubmit]);

  const handlerChangeSubmit = () => {
    setIsSubmit(prev => !prev)
  }

  return (
    <div className='friends-box'>
      {users.map((friend) => (
        <Friend
          isSubmit={isSubmit}
          onChangeSubmit={handlerChangeSubmit}
          userName={friend.userName}
          key={friend.userName}
          // eslint-disable-next-line no-underscore-dangle
          id={friend._id}
        />
      ))}
    </div>
  );
};

export default UserList;
