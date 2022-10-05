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
       <ul>
        <li><NavLink style={{color: 'blue'}} to="/" end>Home</NavLink></li>
        
        <li><NavLink style={{color: 'blue'}} to="/Login">Login</NavLink></li>
        
        <li><NavLink style={{color: 'blue'}} to="/Register">Register</NavLink></li>
        
        </ul>
          
        </ul>
      </nav>
      <Routes>
       
        <Route path="/" element={<Landing />} />

        <Route path="/Login" element={<Login />} />

        <Route path="/Register" element={<Register />} />
      </Routes>
      </>
    );
    }
  
  export default App;
