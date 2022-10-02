import React from 'react'
import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing';
import Products from './pages/Products';
// import CreateProduct from './pages/ProductCreate';
import { Route, Routes } from 'react-router-dom'; 


function App() {
  return (
    <div className="App">
    
      <Nav /> 
   
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path= '/' element={<Nav />} /> 
        <Route path='/products' element={<Products />} />
        {/* <Route path='/products/create' element={<CreateProduct />} /> */}
      </Routes>
    
      
            
      

    </div>
  );
}

export default App;