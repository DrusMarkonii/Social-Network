import React, { useState, useContext } from 'react';
import './Login.css';
import axios from 'axios';
import  {UserContext} from '../App/UserContext';
import { NavLink } from 'react-router-dom';


const Login: React.FC = () => {
  const [password, setPassword] = useState('');
  const [isShow, setIsShow] = useState(false);
  const [email, setEmail] = useState('');

  const {userLogin, setUserLogin, isAuth, setIsAuth} = useContext(UserContext)
 


  const submitHandler = async () => {
    try {
      
      if (email && password !== '') {
        const response = await axios.post('http://localhost:5000/api/auth/login', {
          email,
          password,
        });
        const guest = response.data.user
  
        console.log(guest)
        // console.log(response.data.user)
       
        setUserLogin(JSON.stringify(guest))
        setIsAuth(true)
  
        localStorage.setItem('token', response.data.token )
        localStorage.setItem('token', response.data.user)
        
        
      }
      setEmail('');
      setPassword('');
    } catch (e:any) {
      console.log(e)
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
      <div>
        
        <NavLink to='/profile'>
          <input onClick={submitHandler} type='submit' value='Login' />
        </NavLink>
      </div>
      {userLogin}
    </div>
  );
};

export default Login;
