import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const PostData = [
  {
    id: 1,
    username: 'Drus Markoni',
    message: 'Welcome to AruSNet with Drus',
    likesCount: 5,
  },
  {
    id: 2,
    username: 'Jane Pokr',
    message: 'Welcome to AruSNet with Jane',
    likesCount: 3,
  },
  {
    id: 3,
    username: 'Romale',
    message: 'Welcome to AruSNet with Romale',
    likesCount: 1,
  },
];

const PostItems = PostData.map((item) => (
  <Post
    username={item.username}
    message={item.message}
    likesCount={item.likesCount}
    key={item.id}
  />
));

const MyPosts = () => (
  <div className='myPosts'>
    <div>
      <h5>My MyPosts</h5>
      <div>
        <textarea />
        <button type='submit'>Add Post</button>
        <button type='submit'>Remove</button>
      </div>
      {PostItems}
    </div>
  </div>
);

export default MyPosts;
