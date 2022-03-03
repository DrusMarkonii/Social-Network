import React, { useEffect, useState, useContext } from 'react';
import { io } from 'socket.io-client';
import { UserContext } from '../../App/UserContext';
import './Chat.css';

const Chat = () => {
  const [users, setUsers] = useState<any[]>([]);
  const messages: HTMLDivElement[] = [];

  const { userLogin, setUserLogin } = useContext(UserContext);
  const userDataLocalStorage = JSON.parse(userLogin);
  const { userName } = userDataLocalStorage;

  const [textPost, setTextPost] = useState('');
  const changeTextArea = (e: any) => setTextPost(e.target.value);

  const socket = io('http://localhost:5000');

  const handlerSubmit = async (e: any) => {
    if (textPost !== '') {
      e.preventDefault();
      socket.emit('chat message', {
        message: textPost,
        name: userName,
      });
      setTextPost('');
      console.log(textPost)

      // await axios(`http://localhost:5000/friend/chat/`);
    } else {
      alert('Enter text!');
    }
  };

  socket.on('chat message', (data) => {
    const item = document.createElement('div');

    if (userName === data.name) {
      item.className = 'my_message';
    } else {
      item.className = 'friend_message';
    }

    item.innerHTML = `
        <div class="text-box">
            <span>${data.name}:  </span>
            <span>${data.message}</span>
        </div>    
        `;
    messages.push(item);
    console.log(item)
    console.log(data);
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const result = await axios('http://localhost:5000/messages/chat/');

  //     setUsers(result.data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <div className='inputTextBox'>
        <h4>Chat</h4>
        <ul id='messages'>
          {/* {messages.map(item => <li key={item.}>{item}</li>)} */}
        </ul>
        <form id='form' action=''>
          <div className='name'>{userName}</div>
          <input
            id='input'
            autoComplete='off'
            value={textPost}
            className='textareaInput'
            placeholder='Enter text'
            onChange={changeTextArea}
          />
          <button type='submit' onClick={handlerSubmit}>
            Send
          </button>
        </form>
      </div>
      {/* <input
          value={textPost}
          className='textareaInput'
          placeholder='Enter text'
          onChange={changeTextArea}
        />
        <button type='submit' onClick={handlerSubmit}>
          Add Post
        </button> */}

      {/* <ul id='messages' />
      <form id='form' action=''>
        <input id='input' autoComplete='off' />
        <button type='submit'>Send</button>
      </form> */}
    </>
  );
};

export default Chat;
