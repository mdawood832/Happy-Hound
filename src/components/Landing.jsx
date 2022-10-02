import React from 'react'
import LandingPagePhoto from '../assets/landingPagePhoto.png'
import { Route, Routes, Link } from 'react-router-dom'; 
import Products from '../pages/Products';
import CreateProduct from '../pages/ProductCreate';


function Landing() {
  return (
    <section id='landing'>
        <header>
            <div className="headerContainer">
                <div className="headerDescription">
                    <img className='landingPagePhoto' src={LandingPagePhoto} alt="" />
                </div>
                <div className='headerCaption'>
                        <h1 className='shopCaption'>America's Leading Brand for Dogs</h1>
                         
                        <Link to='/products'><button className='shopButton'> Shop Now</button></Link>

                        <Routes>
                            <Route path="/products" element={<Products />} />
                            <Route path="/products/product" element={<CreateProduct />} />
                        </Routes>
                       
                       
                          
                    </div>
            </div>
        </header>
    </section>
  )
}

export default Landing
