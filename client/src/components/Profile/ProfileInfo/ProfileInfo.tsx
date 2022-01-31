import React, { useContext } from 'react';
import './ProfileInfo.css';
import { UserContext } from '../../App/UserContext';



const ProfileInfo = () => {
  
  const {userLogin, setUserLogin} = useContext(UserContext)
  const userDataLocalStorage = JSON.parse(userLogin)
  const {userName} = userDataLocalStorage
  
 

  return (
    <div className='profileInfo'>
      <div className='backgroundImage'>
        <img
          src='https://png.pngtree.com/thumb_back/fh260/background/20200626/pngtree-abstract-futuristic-dual-color-blue-pink-neon-banner-image_340219.jpg'
          alt='background-img'
        />
      </div>
      <div className='descriptionBlock'><h5>{userName}</h5> </div>
    </div>
  );
};

export default ProfileInfo;
