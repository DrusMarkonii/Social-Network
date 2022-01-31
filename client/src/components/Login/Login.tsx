import React, { useState, useContext } from 'react';
import './Login.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App/UserContext';

const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [email, setEmail] = useState('');

  const { userLogin, setUserLogin, setIsAuth } = useContext(UserContext);

  // const auth = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:5000/api/auth/auth', {
  //       headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  //     });
  //     setUserLogin(response.data.user);
  //     localStorage.setItem('token', response.data.token);
  //   } catch (e: any) {
  //     alert(e.response.data.message);
  //     localStorage.removeItem('token');
  //   }
  // };

  const submitHandler = async () => {
    try {
      if (email && password !== '') {
        const response = await axios.post(
          'http://localhost:5000/api/auth/login',
          {
            email,
            password,
          }
        );
        const guest = response.data.user;

        setUserLogin(JSON.stringify(guest));
        setIsAuth(true);

        localStorage.setItem(
          'USER',
          JSON.stringify({
            token: response.data.token,
            user: response.data.user,
          })
        );
      }
      setEmail('');
      setPassword('');
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <div className='login'>
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
      <div className='log-reg'>
        <NavLink to='/profile'>
          <input onClick={submitHandler} type='button' value='Login' />
        </NavLink>
        <NavLink to='/api/auth/registration'>
          <span className='registration'>Registration</span>
        </NavLink>
      </div>
      {userLogin}
    </div>
  );
};

export default Login;
