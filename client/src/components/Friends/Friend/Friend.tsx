import React from 'react';
import { NavLink } from 'react-router-dom';
import './Friend.css';

type DialogType = {
  username: string;
  id:number;
  
};

const Friend = ({ username, id}: DialogType) => (
  <div className='friend'>
    
    <div>
      <img src='https://www.blexar.com/avatar.png' alt='user ava' />
    </div>
    <NavLink to={`/friends/${id}`}>{username}</NavLink>
  </div>
);

export default Friend;
