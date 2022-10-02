import React from 'react'
import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CreateProduct from './pages/ProductCreate';
import ProductEdit from './pages/ProductEdit';
import { Route, Routes, Link } from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      {/* <Landing/> */}
      {/* <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/products" element={<Products />} />
      </Routes> */}
      <Products />
      
            
      

    </div>
  );
}

export default App;