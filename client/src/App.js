import React, { Suspense } from 'react';
import {Route, Routes} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import NoticePage from './notice-page';
import Footer from './Footer';
import Registration from './Registration';
import Login from './Login';
const App = () => {
  return (
    <div className='app'>
      <Suspense fallback = {<div> loading </div>}>
      <Navigation />
      <div className = 'content-area'>
        <Routes>
          <Route exact path = "/"  element = {<Home/>} />
          <Route exact path = "/about" element = {<About />} />
          <Route exact path = '/notice' element = {<NoticePage/>} />
          <Route exact path = '/registration' element = {<Registration/>} />
          <Route exact path = '/login' element = {<Login/>} />
        </Routes>
      </div>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;
