
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
import ProductEdit from './pages/ProductEdit';
import CreateProduct from './pages/ProductCreate';



function App() {
  return (

    <div className="App">
    
      <Nav /> 
   
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path= '/' element={<Nav />} /> 
        <Route path='/products' element={<Products />} />
        <Route path='/edit/:id' element={ <ProductEdit />}/>
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/detail/:id' element={<ProductDetail/>}/>
      </Routes>
      

     
    
      
            
      
     
    </div>

  );
}

export default App;
