import React, { useContext } from 'react';
import './ProfileInfo.css';

// eslint-disable-next-line import/no-cycle
import { UserContext } from '../../App/App';

const ProfileInfo = () => {
  const user = useContext(UserContext);

  console.log(user)
 

  return (
    <div className='profileInfo'>
      <div className='backgroundImage'>
        <img
          src='https://png.pngtree.com/thumb_back/fh260/background/20200626/pngtree-abstract-futuristic-dual-color-blue-pink-neon-banner-image_340219.jpg'
          alt='background-img'
        />
      </div>
      <div className='descriptionBlock'>{user} </div>
    </div>
  );
};

export default ProfileInfo;
