import React from 'react';
import './Dialog.css';
import { NavLink } from 'react-router-dom';

type DialogType = {
  userName: string;
  id: number;
};

const Dialog = ({ userName, id }: DialogType) => (
  <div className='dialog'>
    <div>
      <img src='https://www.blexar.com/avatar.png' alt='user ava' />
    </div>
    <NavLink to={`/messages/${id}`}>{userName}</NavLink>
  </div>
);

export default Dialog;
