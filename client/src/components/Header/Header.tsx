import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header: React.FC = () => (
  <div className='header'>
    <NavLink to='/api/auth/registration' className='brand-logo'>
      AruSNet
      <img className='header__logo__img' src='https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg' alt='logo img'/>
    </NavLink>
  </div>
);

export default Header;
