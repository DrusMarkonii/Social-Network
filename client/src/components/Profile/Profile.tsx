import React from 'react';
import MyPosts from './MyPosts/MyPosts';

const Profile: React.FC = () => (
  <div className='profile'>
    <div>
      <img
        src='https://png.pngtree.com/thumb_back/fh260/background/20200626/pngtree-abstract-futuristic-dual-color-blue-pink-neon-banner-image_340219.jpg'
        alt='background-img'
      />
    </div>
    <div>ava + description</div>
    <MyPosts />
  </div>
);

export default Profile;
