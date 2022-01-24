import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Friend from './Friend/Friend';

const UserList: React.FC = () => {
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

  return (
    <div>
      {}
      {users.map((friend) => (
        <Friend
          username={friend.userName}
          key={friend.id}
          id={friend.userName}
        />
      ))}
    </div>
  );
};

export default UserList;