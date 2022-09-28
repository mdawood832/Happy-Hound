import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import Register from './components/Register';
import Login from './components/Login';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
library.add(faShoppingCart)


ReactDOM.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

