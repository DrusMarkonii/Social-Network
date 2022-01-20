import React from 'react';
import { useSelector } from 'react-redux';


const Friends:React.FC = () => {
  // eslint-disable-next-line no-shadow
  const state = useSelector(state => state)
  console.log(state)
  return <div className='friends'>hi</div>;
};

export default Friends;




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
