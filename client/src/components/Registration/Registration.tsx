import React, { useState } from 'react';
import './Registration.css';

const Registration: React.FC = () => {
  const [inputValue, setValue] = useState({
    userName: '',
    password: '',
    email: ''
  })


  const handelChange = (e:any) => {
    const {name, value} = e.target;
    setValue({
      ...value,
      [name]: value

    })
  }
  
  const submitHandler = () => {
    console.log('submit');
    console.log(inputValue)
  };

  return (
    <div className='registration'>
      <div>
        User Name
        <input type='text' placeholder='User name' name='userName' onChange={handelChange}/>
      </div>
      <div>
        Email
        <input type='text' placeholder='Email' name='email'/>
      </div>
      <div>
        Password
        <input type='text' placeholder='Password' name='password' />
      </div>
      <div>
        <input onClick={submitHandler} type='submit' value='Register' />
      </div>
    </div>
  );
};

export default Registration;
