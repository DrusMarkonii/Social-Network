import React from 'react';

const Navbar: React.FC = () => (
    <nav>
        <div className='nav-wrapper blue darken-1'>
            <a href='/' className='brand-logo'>
                DruSNet
            </a>
            <ul className='right hide-on-med-and-down'>
                <li>
                    <a href='/'>Profile</a>
                </li>
                <li>
                    <a href='/'>Friends</a>
                </li>
                <li>
                    <a href='/'>Dialogs</a>
                </li>
                <li>
                    <a href='/'>News</a>
                </li>
                <li>
                    <a href='/'>Exit</a>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;
