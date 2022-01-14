import React from 'react';
import './Footer.css'

const Footer: React.FC = () => (
  <div className='footer'>
    <a href='/' className='brand-logo'>
      AruSNet
      <img className='footer__logo__img' src='https://png.pngtree.com/png-clipart/20200709/original/pngtree-abstract-s-letter-circle-vector-logo-design-alphabet-circle-logo-vector-png-image_3611616.jpg' alt='logo img'/>
    </a>
    <div>
      PS Makarevich 2022
    </div>
  </div>
);

export default Footer;
