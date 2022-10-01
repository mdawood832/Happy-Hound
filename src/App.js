 import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom'; 
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';
import './App.css';
 


function App() {

    return (
      <>
      <nav>
       <ul>
        <li><NavLink style={{color: 'blue'}} to="/" end>Home</NavLink></li>
        
        <li><NavLink style={{color: 'blue'}} to="/login">Login</NavLink></li>
        
        <li><NavLink style={{color: 'blue'}} to="/register">Register</NavLink></li>
        
        </ul>
      </nav>
      <Routes>
       
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />
      </Routes>
      </>
    );
    }
  
  export default App;
