import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
// import Profile from '../Profile/Profile';
import Messages from '../Messages/Messages';
import './App.css';

const App: React.FC = () => (
  <>
    <Header />
    <div className='container'>
      <Navbar />
      {/* <Profile /> */}
      <Messages />
    </div>
    <Footer />
  </>
);

export default App;
