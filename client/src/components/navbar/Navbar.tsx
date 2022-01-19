import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => (
  <div className='navbar'>
    <ul className='navbar__list'>
      <li className='navbar__list__item'>
        <NavLink to='/profile'>Profile</NavLink>
      </li>
      <li className='navbar__list__item'>
        <NavLink to='/friends'>Friends</NavLink>
      </li>
      <li className='navbar__list__item'>
        <NavLink to='/messages'>Messages</NavLink>
      </li>
      <li className='navbar__list__item'>
        <NavLink to='/news'>News</NavLink>
      </li>
      <li className='navbar__list__item'>
        <NavLink to='/settings'>Settings</NavLink>
      </li>
    </ul>
  </div>
);

export default Navbar;
