import React from 'react';
import './Friend.css';

type DialogType= {
  username: string
}

const Friend= ({username}:DialogType) => (
  <div className='friend'>
    <div>
      <img src='https://www.blexar.com/avatar.png' alt='user ava' />
    </div>
    <div>{username}</div>
  </div>
);

export default Friend;
