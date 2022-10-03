
import './css/App.css'
import ProductDetail from './pages/ProductDetail'
import React from 'react'
// import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing';
import Products from './pages/Products';
// import CreateProduct from './pages/ProductCreate';
import { Route, Routes } from 'react-router-dom'; 
import Footer from './components/Footer';



function App() {
  return (

    <div className="App">
    
      <Nav /> 
   
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path= '/' element={<Nav />} /> 
        <Route path='/products' element={<Products />} />
        {/* <Route path='/products/create' element={<CreateProduct />} /> */}
         <Route path='/ProductDetail/:id' element={<ProductDetail/>}/>
      </Routes>
      

      {/* <Footer /> */}
    
      
            
      

    </div>

  );
}

export default App;
