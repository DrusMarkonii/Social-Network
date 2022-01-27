import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
// eslint-disable-next-line import/no-cycle
import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import './App.css';
import News from '../News/News';
import Friends from '../Friends/Friends';
// eslint-disable-next-line import/no-cycle
import Registration from '../Registration/Registration';

export const UserContext = React.createContext({});

const App = () => {
  const [context, setContext] = useState("Drus");
  return (
    <Router>
      <UserContext.Provider value={context}>
        <Header />
        <div className='container'>
          <Navbar />
          <div className='mainContent'>
            <Routes>
              <Route path='/' element={<h5>Welocme to AruSNet</h5>} />
              <Route path='/api/auth/registration' element={<Registration />} />
              <Route path='/profile/' element={<Profile />} />
              <Route path='/messages/*' element={<Messages />} />
              <Route path='/news/*' element={<News />} />
              <Route path='/friends/*' element={<Friends />} />
            </Routes>
          </div>
        </div>
        {/* <Footer /> */}
      </UserContext.Provider>
    </Router>
  );
};

export default App;
