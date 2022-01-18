import React from 'react';
import './MyPosts.css';
import Post from './Post/Post';

type myType = {
  username: string;
  message: string;
  likesCount: number;
  id: number;
};

type PostsDataType = {
  postsData: myType[];
  addPost: any;
};

const MyPosts = ({ postsData, addPost }: PostsDataType) => {
  const PostItems = postsData.map((item) => (
    <Post
      username={item.username}
      message={item.message}
      likesCount={item.likesCount}
      key={item.id}
    />
  ));
  
  const handlerAddPost= () => {
    alert(addPost)
    addPost('great job 1')
  }


  return (
    <div className='myPosts'>
      <div>
        <h5>My MyPosts</h5>
        <div>
          <textarea />
          <button onClick={handlerAddPost} type='submit'>Add Post</button>
          <button type='submit'>Remove</button>
        </div>
        {PostItems}
      </div>
    </div>
  );
};

export default MyPosts;
