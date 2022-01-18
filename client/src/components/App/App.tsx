import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import './App.css';
import News from '../News/News';
import Friends from '../Friends/Friends';
import Registration from '../Registration/Registration';

// type friendsObjType = {
//   username: string;
//   id: number;
// };

// type postsObjType = {
//   id: number;
//   username: string;
//   message: string;
//   likesCount: number;
// };

// type dialogsObjType = {
//   id: number;
//   username: string;
// };

// type messagesObjType = {
//   id: number;
//   message: string;
// };

// type allDataType = {
//   friendsData: friendsObjType[];
//   postsData: postsObjType[];
//   dialogsData: dialogsObjType[];
//   messagesData: messagesObjType[];
// };

type stateType = {
  appState: any;
  addPost: any
};

const App = ({ appState, addPost }: stateType) => (
  <Router>
    <Header />
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Registration />} />
        <Route
          path='/profile/'
          element={<Profile postsData={appState.profilePage.postsData} addPost={addPost}/>}
        />
        <Route
          path='/messages/*'
          element={
            <Messages
              messagesData={appState.messagesPage.messagesData}
              dialogsData={appState.messagesPage.dialogsData}
            />
          }
        />
        <Route path='/news/*' element={<News />} />
        <Route
          path='/friends/*'
          element={<Friends friendsData={appState.friendsPage.friendsData} />}
        />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
