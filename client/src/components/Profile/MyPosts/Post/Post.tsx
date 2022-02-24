import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Post.css';

type TypePost = {
  isSubmit: any;
  onChangeSubmit: any;
  message: string;
  username: string;
  likesCount: number;
  date: any;
};

const Post = ({
  message,
  username,
  likesCount,
  date,
  isSubmit,
  onChangeSubmit,
}: TypePost) => {
  const removePost = async () => {
    await axios.delete('http://localhost:5000/posts', {
      data: {
        date,
      },
    });
    const changeSubmit = () => onChangeSubmit(isSubmit);
    changeSubmit();
  };
  

  return (
    <div className='post'>
      <div>
        <img src='https://www.blexar.com/avatar.png' alt='user ava' />
      </div>
      <div>{username}</div>
      <div className='content'>
        <p>{message}</p>
      </div>
      <div>
        <img
          src='https://img2.freepng.ru/20180806/yrp/kisspng-heart-clip-art-symbol-computer-icons-image-%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-avatan-plus-5b68a2edba4d12.7967646815335841097631.jpg'
          alt='like for post'
        />
      </div>
      <div>{likesCount}</div>
      <div className='removeBtn'>
        <button id={date} onClick={removePost} type='submit'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
