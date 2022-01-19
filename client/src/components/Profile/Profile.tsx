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
  postsData: postsObjType[];
  addPost: any
}

const Profile = ({postsData, addPost}:PostDataType) => (
  <div className='profile'>
    <ProfileInfo />
    <MyPosts postsData={postsData} addPost={addPost}/>
  </div>
);

export default Profile;
