import React from 'react';
import './Navbar.css'

const Navbar: React.FC = () => (
  <div className='navbar'>
    <ul className='navbar__list'>
      <li className='navbar__list__item'>
        <a href='/Profile'>Profile</a>
      </li>
      <li className='navbar__list__item'>
        <a href='/Friends'>Friends</a>
      </li>
      <li className='navbar__list__item'>
        <a href='/Messages'>Messages</a>
      </li>
      <li className='navbar__list__item'>
        <a href='/News'>News</a>
      </li>
      <li className='navbar__list__item'>
        <a href='/Settings'>Settings</a>
      </li>
    </ul>
  </div>
);

export default Navbar;
