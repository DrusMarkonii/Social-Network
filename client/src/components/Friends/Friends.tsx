import React from 'react';
import Friend from './Friend/Friend';

type friendsObjType = {
  username: string,
  id:number
}

type friendsDataType = {
  friendsData: friendsObjType[];
};

const Friends = ({ friendsData }: friendsDataType) => {
  const friendsItem = friendsData.map((friend) => (
    <Friend username={friend.username} key={friend.id} id={friend.id} />
  ));
  return <div className='friends'>{friendsItem}</div>;
};

export default Friends;
