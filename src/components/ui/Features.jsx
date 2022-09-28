import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Features = ({Products}) => {
  return (
    <div className='dogAccesorie'>

        <a href="">
            <figure className='dogAccesorieWrapper'>
                <img className='dogAccesorieImage' src={Products.image} alt="" />
            </figure>
        </a>

        <div className='dogAccesorieTitle'>
            <a href="/" className='dogAccesorieTitleLink'>
                {Products.name}
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
            <span className="dogPrice">{Products.price}</span>
        </div>

    </div>
  )
}

export default Features