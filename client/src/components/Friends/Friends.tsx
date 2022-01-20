import React from 'react';
import Friend from './Friend/Friend';

const Friends = () => {
  const friendsData = [
    { id: 1, username: 'Jane' },
    { id: 2, username: 'Bob' },
    { id: 3, username: 'James' },
    { id: 4, username: 'Andrei' },
    { id: 5, username: 'Rob' },
    { id: 6, username: 'Adam' },
  ];
  const friendsItem = friendsData.map((friend) => (
    <Friend username={friend.username} key={friend.id} id={friend.id} />
  ));
  return <div className='friends'>{friendsItem}</div>;
};

export default Friends;
