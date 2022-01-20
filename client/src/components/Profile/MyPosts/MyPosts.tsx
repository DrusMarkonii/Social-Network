import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

const MyPosts = () => {
  const postsData: {
    id: number;
    username: string;
    message: string;
    likesCount: number;
  }[] = [
    {
      id: 1,
      username: 'Drus Markoni',
      message: 'Welcome to AruSNet with Drus',
      likesCount: 6,
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

  const PostItems = postsData.map((item) => (
    <Post
      username={item.username}
      message={item.message}
      likesCount={item.likesCount}
      key={item.id}
    />
  ));

  return (
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
};

export default MyPosts;
