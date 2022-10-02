import React from 'react'
import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing';
import Products from './pages/Products';
import { Route, Routes, Link } from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="*" element={<Landing />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    
      
            
      

    </div>
  );
}

export default App;