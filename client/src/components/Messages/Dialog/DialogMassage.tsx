import React from 'react';
import './Dialog.css';

type DialogType = {
  message: string;
};

const DialogMassage = ({ message }: DialogType) => (
  <div className='dialogMessage'>
    {message}
  </div>
);

export default DialogMassage;
