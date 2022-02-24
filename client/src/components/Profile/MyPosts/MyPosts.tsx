import React, { useState, useEffect, useContext } from 'react';
import './MyPosts.css';
import axios from 'axios';
import { UserContext } from '../../App/UserContext';
import Post from './Post/Post';

const MyPosts = () => {
  const [data, setData] = useState<any[]>([]);
  const [textPost, setTextPost] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const { userLogin, setUserLogin } = useContext(UserContext);
  const userDataLocalStorage = JSON.parse(userLogin);
  const { userName } = userDataLocalStorage;

  const handlerSubmit = async () => {
    

    if (textPost !== '') {
      await axios.post('http://localhost:5000/posts', {
        date: Date.now(),
        userName,
        content: textPost,
      });
      setIsSubmit(!isSubmit);
      // console.log('-')
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

  const posts = data;

  const PostItems = posts.map((item) => (
    <Post
      isSubmit={isSubmit}
      onChangeSubmit={handlerChangeSubmit}
      username={item.userName}
      message={item.content}
      likesCount={item.likesCount}
      key={item.id}
      date={item.date}
    />
  ));

  return (
    <div className='myPosts'>
      <div>
        <h5>My MyPosts</h5>
        <div className='inputTextBox'>
          <textarea
            value={textPost}
            onChange={changeTextArea}
            className='textareaInput'
            placeholder='Enter text'
          />
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
