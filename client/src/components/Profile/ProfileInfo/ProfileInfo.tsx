import React, { useContext } from 'react';
import './ProfileInfo.css';
import { UserContext } from '../../App/UserContext';



const ProfileInfo = () => {
  const local:any = localStorage.getItem('user')
  const userData = JSON.parse(local)
  console.log(local)
  const {userLogin, setUserLogin} = useContext(UserContext)

 

  return (
    <div className='profileInfo'>
      <div className='backgroundImage'>
        <img
          src='https://png.pngtree.com/thumb_back/fh260/background/20200626/pngtree-abstract-futuristic-dual-color-blue-pink-neon-banner-image_340219.jpg'
          alt='background-img'
        />
      </div>
      <div className='descriptionBlock'>{userLogin} </div>
    </div>
  );
};

export default ProfileInfo;
