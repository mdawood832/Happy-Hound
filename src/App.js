import React, { Component } from 'react'
import './css/App.css'
import Home from '../src/pages/Home'
import Nav from '../src/components/Nav'
import Footer from '../src/components/Footer'
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import CreateProduct from './pages/ProductCreate';
import ProductEdit from './pages/ProductEdit';


function App() {
  return (
    <div className="App">
      {/* <Nav/>
      <Landing/> */}
      <Products />
      
      

    </div>
  );
}

export default App;
