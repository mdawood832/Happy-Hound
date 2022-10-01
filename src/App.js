 import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'; 
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
 import Nav from './components/Nav';

import Landing from './components/Landing';


function App() {

    return (
      <>
      <nav>
       <ul>
        <li><Link to="/">Home</Link>
        </li>
        <li><Link to="/login">Login</Link>
        </li>
        <li><Link to="/register">Register</Link>
        </li>
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
