import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => (
  <div className='myPosts'>
    <div>
      My MyPosts
      <div>
        <textarea />
        <button type='submit'>Add Post</button>
        <button type='submit'>Remove</button>
      </div>
      <Post username='Drus Markoni' message='Welcome to AruSNet with Drus' likesCount={0} />
      <Post username='Jane' message='Welcome to AruSNet with Jane' likesCount={5}/>
    </div>
  </div>
);

export default MyPosts;
