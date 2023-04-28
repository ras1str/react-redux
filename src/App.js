import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';



function App(props) {

  
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavContainer/>

        <div className="app-wrapper-content">
          <Routes>
            <Route path="/profile/*" element={<Profile/>} /> 
            <Route path="/dialogs/*" element={<DialogsContainer  />} />
            <Route path="/news/*" element={<News />} />
            <Route path="/music/*" element={<Music />} />
            <Route path="/settings/*" element={<Settings />} />
            <Route path="/users/*" element={<UsersContainer />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>
  );
}


export default App;
