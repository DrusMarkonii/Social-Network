import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

type postsObjType = {
  id: number;
  username: string;
  message: string;
  likesCount: number;
};

type PostDataType = {
  postsData: postsObjType[]
}

const Profile = ({postsData}:PostDataType) => (
  <div className='profile'>
    <ProfileInfo />
    <MyPosts postsData={postsData} />
  </div>
);

export default Profile;
