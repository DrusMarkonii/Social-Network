import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../App/UserContext';
import './Header.css';

const Header: React.FC = () => {
  const {setUserLogin, isAuth, setIsAuth } = useContext(UserContext);

  const logOutSubmit = () => {
    setIsAuth(!isAuth)
    localStorage.removeItem('token')
    setUserLogin('')
  }

  return (
    <div className='header'>
      <h1>AruSNet</h1>
      <img
        className='header__logo__img'
        src='https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg'
        alt='logo img'
      />
      <div className='button-panel'>
        {!isAuth ? (
          <NavLink to='/'>
            <button type='button'>Log in</button>
          </NavLink>
        ) : (
          <NavLink to='/'>
            <button onClick={logOutSubmit} type='button'>Log out</button>
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
