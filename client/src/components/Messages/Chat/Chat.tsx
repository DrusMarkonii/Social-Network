import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Chat.css"

const Chat = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [textPost, setTextPost] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);

  const handlerSubmit = async () => {
    if (textPost !== '') {
      await axios(`http://localhost:5000/friend/chat/`);
      setIsSubmit(!isSubmit);
    } else {
      alert('Enter text!');
    }
  };

  const changeTextArea = (e: any) => setTextPost(e.target.value);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/friends');

      setUsers(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='inputTextBox'>
        <h4>Chat</h4>
        <ul id='messages' />
        <form id='form' action=''>
          <div className='name'>Guest</div>
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
