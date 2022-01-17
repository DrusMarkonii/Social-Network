import React from 'react';
import './Registration.css'

const Registration: React.FC = () => (
  <div className='registration'>
    <div>
      User Name
      <input type='text' placeholder='User name' />
    </div>
    <div>
      Email
      <input type='text' placeholder='Email'/>
    </div>
    <div>
      <input type='submit' value='Register'/>
    </div>
  </div>
);

export default Registration;
