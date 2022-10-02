import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Features = ({products}) => {
  return (
    <div className='dogAccesorie'>

        <a href="">
            <figure className='dogAccesorieWrapper'>
                <img className='dogAccesorieImage' src={products.imgURL} alt="" />
            </figure>
        </a>

        <div className='dogAccesorieTitle'>
            <a href="/" className='dogAccesorieTitleLink'>
                {products.name}
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
            <span className="dogPrice">{products.price}</span>
        </div>

    </div>
  )
}

export default Features