
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../store';
import fetchUsers from '../../store/action-creators/user';
import Friend from './Friend/Friend';

const UserList: React.FC = () => {
  // eslint-disable-next-line no-shadow
  const users = useTypesSelector((state) => state.users);
  console.log(users.users)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {users.users.map((friend) => <Friend username={friend.userName} key={friend.id} id={friend.userName}/>)}

    </div>
    
  );
};

export default UserList;



// const Friends = () => {
//   const friendsData = [
//     { id: 1, username: 'Jane' },
//     { id: 2, username: 'Bob' },
//     { id: 3, username: 'James' },
//     { id: 4, username: 'Andrei' },
//     { id: 5, username: 'Rob' },
//     { id: 6, username: 'Adam' },
//   ];
//   const friendsItem = friendsData.map((friend) => (
//     <Friend username={friend.username} key={friend.id} id={friend.id} />
//   ));
//   return <div className='friends'>{friendsItem}</div>;
// };
