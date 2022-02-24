import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import './Profile.css'


const Profile = () => (
  <div className='profile'>
    <ProfileInfo />
    <MyPosts />
  </div>
);

export default Profile;
