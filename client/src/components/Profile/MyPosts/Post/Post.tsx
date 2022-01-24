import React, { useEffect } from 'react';
import './Post.css';

type TypePost = {
  message: string;
  username: string;
  likesCount: number;
  id: any;
};

const Post = ({ message, username, likesCount, id }: TypePost) => {
  const removePost = () => {
    
    console.log('click')
  };
  return (
    <div className='post'>
      <div>
        <img src='https://www.blexar.com/avatar.png' alt='user ava' />
      </div>
      <div>{username}</div>
      <div className='content'>{message}</div>
      <div>
        <img
          src='https://img2.freepng.ru/20180806/yrp/kisspng-heart-clip-art-symbol-computer-icons-image-%D0%9F%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8C-avatan-plus-5b68a2edba4d12.7967646815335841097631.jpg'
          alt='like for post'
        />
      </div>
      <div>{likesCount}</div>
      <div className='removeBtn'>
        <button id={id} onClick={removePost} type='submit'>
          X
        </button>
      </div>
    </div>
  );
};

export default Post;
