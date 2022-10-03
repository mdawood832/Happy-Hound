

import React from 'react'
import LandingPagePhoto from '../assets/landingPagePhoto.png'

import Featured from './Featured'
import ShopNow from './ui/ShopNow'
import { Link } from "react-router-dom";
import Products from '../pages/Products';


const Landing = () => {
  return (
    
    
    <div>
            <div className="headerContainer">
                <div className="headerDescription">
                    <img className='landingPagePhoto' src={LandingPagePhoto} alt="" />
                </div>
                <div className='headerCaption'>
                        <h1 className='shopCaption'>America's Leading Brand for Dogs</h1>
                </div>
                       
                <div>
                        <Link to='/products'><button className='shopButtonTag'> Shop Now</button></Link> 
                </div>

            </div>
     
 
    
  )
}

export default Landing