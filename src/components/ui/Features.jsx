import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Features() {
  return (
    <div className='dogAccesorie'>

        <a href="">
            <figure className='dogAccesorieWrapper'>
                <img className='dogAccesorieImage' src='https://i.ibb.co/Hnw8pzC/dogBowl.png' alt="" />
            </figure>
        </a>

        <div className='dogAccesorieTitle'>
            <a href="/" className='dogAccesorieTitleLink'>
                Dog bowl
            </a>
        </div>

        <div className='dogAccesorieRatings'>
            <FontAwesomeIcon icon='star'/>
            <FontAwesomeIcon icon='star'/>
            <FontAwesomeIcon icon='star'/>
            <FontAwesomeIcon icon='star'/>
            <FontAwesomeIcon icon='star'/>
        </div>

        <div className='dogAcesoriePrices'>
            <span className="dogPrice">$15.99</span>
        </div>

    </div>
  )
}

export default Features