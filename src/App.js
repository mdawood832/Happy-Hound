import React, {Component} from 'react'
import './css/App.css'
import Home from '../src/pages/Home'
import Nav from '../src/components/Nav'
import Footer from '../src/components/Footer'
import Products from '../src/pages/Products'



function App() {
  return (
    <div className='App'>
        <Nav/>
        {/* <Home/> */}
        <Products/>
        <Footer/>
        {/* <table>
        <tbody>
          { this.state.products.map(products => {
              return (
                <tr>
                  <td key={products._id} > {products.name}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table> */}
      </div>
  );
}

export default App;
