import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import './App.css';

const App: React.FC = () => (
  <Router>
    <Header />
    <div className='container'>
      <Navbar />
      <Routes>
        <Route path='/Profile' element={<Profile />} />
        <Route path='/Messages' element={<Messages />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
