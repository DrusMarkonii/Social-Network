import React from 'react';
import './Dialog.css';

type DialogType= {
  username: string,
  message: string
}

const Dialog= ({username, message}:DialogType) => (
  <div className='dialog'>
    <div>
      <img src='https://www.blexar.com/avatar.png' alt='user ava' />
    </div>
    <div>{username}</div>
    <div>{message}</div>
  </div>
);

export default Dialog;
