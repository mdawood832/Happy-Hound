import './css/App.css'
import Home from '../src/pages/Home'
import Nav from '../src/components/Nav'
import Footer from '../src/components/Footer'
import Products from '../src/pages/Products'
import {Routes, Route} from 'react-router-dom'
import ShopNow from './components/ui/ShopNow.jsx'


function App() {
  return (
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Products/>}/>
        {/* <div className="App">
          <Nav/>
          <Home/>
          <Footer/>
        </div> */}
      </Routes>
  );
}

export default App;
