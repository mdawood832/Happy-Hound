import './css/App.css'
import {Routes, Route} from 'react-router-dom'
import Home from '../src/pages/Home'
import Products from '../src/pages/Products'
import ProductDetail from '../src/pages/ProductDetail'


function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>}/>
        <Route path='/productsdetail' element={<ProductDetail/>}/>
      </Routes>
  );
}

export default App;
