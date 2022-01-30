import React, { useState, useEffect } from 'react';
import './MyPosts.css';
import axios from 'axios';
import Post from './Post/Post';

const MyPosts = () => {
  const [data, setData] = useState<any[]>([]);
  const [textPost, setTextPost] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  

  const handlerSubmit = async () => {
    if (textPost !== '') {
      await axios.post('http://localhost:5000/posts', {
        id: Date.now(),
        userName: 'Drus',
        content: textPost,
      });
      setIsSubmit(!isSubmit);
    } else {
      alert('Enter text!');
    }
  };

  const handlerChangeSubmit = (state: any) => {
    setIsSubmit(!state);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/posts');

      setData(result.data);
    };
    fetchData();
    setTextPost('');
  }, [isSubmit]);

  const changeTextArea = (e: any) => setTextPost(e.target.value);

  const posts = data.reverse();

  const PostItems = posts.map((item) => (
    <Post
      isSubmit={isSubmit}
      onChangeSubmit={handlerChangeSubmit}
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
          <textarea value={textPost} onChange={changeTextArea} className='textareaInput' placeholder='Enter text'/>
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
