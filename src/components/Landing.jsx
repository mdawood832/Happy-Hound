import React from 'react'
import LandingPagePhoto from '../assets/landingPagePhoto.png'
import { Link } from "react-router-dom";


const Landing = () => {
  return (
    <div>
            <div className="headerContainer">
                <div className="headerDescription">
                    <img className='landingPagePhoto' src={LandingPagePhoto} alt="" />
                </div>

                <div className='headerCaption'>
                        <h1 className='shopCaption'>
                                America's Leading Brand for Dogs
                        </h1>

                        <div className='shopNow'>
                        <Link to='/products'>
                                        <br/>
                                        <button className='shopButtonTag'> Shop Now</button>
                        </Link> 
                        </div>
                </div>
                       
                <div>
                </div>

            </div>
     
            </div>
    
  )
}

export default Landing
