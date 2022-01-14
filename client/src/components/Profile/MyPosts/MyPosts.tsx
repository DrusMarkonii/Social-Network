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
      {/* <Post message='hi' /> */}
      {/* <Post /> */}
    </div>
  </div>
);

export default MyPosts;
