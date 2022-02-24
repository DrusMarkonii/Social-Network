import React from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import './Friend.css';

type DialogType = {
  isSubmit: any;
  onChangeSubmit: any;
  userName: string;
  id: number;
};

const Friend = ({ userName, id, onChangeSubmit, isSubmit }: DialogType) => {
  const handelClickDelete = async () => {
    // eslint-disable-next-line no-restricted-globals
    const isTrue:boolean = confirm(`Are you sure you want to delete ${userName}?`)
    if(isTrue) {
      
      await axios.delete('http://localhost:5000/friends', {
        data: {
          userName,
        },
      });
    };


    const changeSubmit = () => onChangeSubmit(isSubmit);
    changeSubmit();
  };

  return (
    <div className='friend'>
      <div>
        <img src='https://www.blexar.com/avatar.png' alt='user ava' />
      </div>

      <NavLink className='navLink' to={`/friends/${userName}`}>
        {userName}
        <input type='button' value='Delete' onClick={handelClickDelete} />
      </NavLink>
    </div>
  );
};

export default Friend;
