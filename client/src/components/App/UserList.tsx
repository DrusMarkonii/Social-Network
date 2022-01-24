import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../store';
import fetchUsers from '../../store/action-creators/user';

const UserList: React.FC = () => {
  // eslint-disable-next-line no-shadow
  const users = useTypesSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {users.users.map( user => 
        // eslint-disable-next-line react/jsx-key
        <div>{user.name}</div>
      )}
    </div>
  );
};

export default UserList;
