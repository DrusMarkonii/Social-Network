import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../navbar/Navbar';
import Profile from '../Profile/Profile';
import './App.css';

const App: React.FC = () => (
  <>
    <Header />
    <div className='container'>
      <Navbar />
      <Profile />
    </div>
    <Footer />
  </>
);

export default App;
