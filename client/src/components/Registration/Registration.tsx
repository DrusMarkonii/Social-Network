import React, { useState, useContext } from 'react';
import './Registration.css';
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { UserContext } from '../App/App';

const Registration: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isShow, setIsShow] = useState(false);
  const user = useContext(UserContext);


  const submitHandler = async () => {
    if (userName && email && password !== '') {
      await axios.post('http://localhost:5000/api/auth/registration', {
        userName,
        email,
        password,
      });
      setIsShow((prev) => !prev);

      alert(`User ${userName} was created !!!`);
    } else {
      alert('Enter text!');
    }

    setUserName('');
    setEmail('');
    setPassword('');
  };


  return (
    <div className='registration'>
      <div>
        User Name
        <input
          type='text'
          placeholder='User name'
          value={userName}
          onChange={(e: any) => setUserName(e.target.value)}
        />
      </div>
      <div>
        Email
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
      </div>
      <div>
        Password
        <input
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <input onClick={submitHandler} type='submit' value='Register' />
        {user}
      </div>
    </div>
  );
};

export default Registration;
