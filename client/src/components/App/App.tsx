/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useCallback, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import './App.css';
import News from '../News/News';
import Friends from '../Friends/Friends';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import { UserContext } from './UserContext';
import Chat from '../Messages/Chat/Chat';
// import auth from '../Login/auth.action';

const App = () => {
  const [userLogin, setUserLogin] = useState<any>('Guest');
  const [isAuth, setIsAuth] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log(auth());
  // }, []);

  return (
    <Router>
      <UserContext.Provider
        value={{ userLogin, setUserLogin, isAuth, setIsAuth }}
      >
        <Header />
        <div className='container'>
          <Navbar />
          <div className='mainContent'>
            <Routes>
              {!isAuth && (
                <>
                  <Route path='/' element={<Login />} />
                  <Route
                    path='/api/auth/registration'
                    element={<Registration />}
                  />
                </>
              )}
              {isAuth && (
                <>
                  <Route path='/profile/' element={<Profile />} />
                  <Route path='/messages/*' element={<Messages />} />
                  <Route path='/news/*' element={<News />} />
                  <Route path='/friends/*' element={<Friends />} />
                  <Route path='/messages/chat/*' element={<Chat />} />
                  
                </>
              )}
            </Routes>
          </div>
        </div>
        {/* <Footer /> */}
      </UserContext.Provider>
    </Router>
  );
};

export default App;
