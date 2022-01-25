import React, { useState } from 'react';
import './Registration.css';
import axios from 'axios';

const Registration: React.FC = () => {
 

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  
  const submitHandler = async () => {
    if (userName && email && password !== '') {
      await axios.post('http://localhost:5000/api/auth/registration', {
        userName,
        email,
        password
      });
    } else {
      alert('Enter text!');
    }

    setUserName('')
    setEmail('')
    setPassword('')
  };


  return (
    <div className='registration'>
      <div>
        User Name
        <input type='text' placeholder='User name' value={userName} onChange={(e:any)=> setUserName(e.target.value)}/>
      </div>
      <div>
        Email
        <input type='text' placeholder='Email' value={email} onChange={(e:any)=> setEmail(e.target.value)}/>
      </div>
      <div>
        Password
        <input type='text' placeholder='Password' value={password} onChange={(e:any)=> setPassword(e.target.value)}/>
      </div>
      <div>
        <input onClick={submitHandler} type='submit' value='Register' />
      </div>
    </div>
  );
};

export default Registration;
