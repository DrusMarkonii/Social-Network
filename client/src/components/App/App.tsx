import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Profile  from '../Profile/Profile';
import Messages from '../Messages/Messages';
import './App.css';
import News from '../News/News';
import Friends from '../Friends/Friends';
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import  { UserContext } from './UserContext';



const App = () => {
  const local:any = localStorage.getItem('user')
  const userData = JSON.parse(local)

  const [userLogin, setUserLogin] = useState<string>('Guest');
  const [isAuth, setIsAuth] = useState<boolean>(false);
  
  return (
    <Router>
      <UserContext.Provider value={{userLogin, setUserLogin, isAuth, setIsAuth}} >
        <Header />
        <div className='container'>
          <Navbar />
          <div className='mainContent'>
            
            <Routes>
              {!isAuth ? 
                <><Route path='/' element={<Login />} /><Route path='/api/auth/registration' element={<Registration />} /></>: 
                <><Route path='/profile/' element={<Profile />} /><Route path='/messages/*' element={<Messages />} /><Route path='/news/*' element={<News />} /><Route path='/friends/*' element={<Friends />} /></>  
              }
              
              
        
            </Routes> 
          
            
          </div>
        </div>
        {/* <Footer /> */}
      </UserContext.Provider>
    </Router>
  );
};

export default App;
