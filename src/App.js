import './css/App.css'
import Home from '../src/pages/Home'
import Nav from '../src/components/Nav'
import Footer from '../src/components/Footer'
import Products from '../src/pages/Products'



function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
