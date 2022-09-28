

import React, { useState } from 'react';
import  Register  from './components/Register'
import  Login  from './components/Login'
import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Login/>
      <Register/>
       
       
        
      
      
    </div>
      
      
  );
}

export default App;




