import React, { useState, useEffect } from 'react';
import './MyPosts.css';
import axios from 'axios';
import Post from './Post/Post';

const MyPosts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [textPost, setTextPost] = useState('');
  const [isSubmit, setIsSubmit] = useState(false)

  const handlerSubmit = async () => {
    await axios.post('http://localhost:5000/posts', {
      userName: 'Drus',
      content:  textPost,
    });
    setIsSubmit(!isSubmit)
    console.log(textPost);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/posts');

      setPosts(result.data);
    };
    fetchData();
    setTextPost('')

  }, [isSubmit]);

  const changeTextArea = (e: any) => setTextPost(e.target.value);

  const PostItems = posts.map((item) => (
    <Post
      username={item.userName}
      message={item.content}
      likesCount={item.likesCount}
      key={item.id}
      id={item.id}
    />
  ));

  return (
    <div className='myPosts'>
      <div>
        <h5>My MyPosts</h5>
        <div className='inputTextBox'>
          <textarea value={textPost} onChange={changeTextArea} />
          <button type='submit' onClick={handlerSubmit}>
            Add Post
          </button>
        </div>
        {PostItems}
      </div>
    </div>
  );
};

export default MyPosts;
