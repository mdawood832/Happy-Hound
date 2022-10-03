import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import ProductDetail from '../../pages/ProductDetail'


const Features = ({products}) => {
  return (
    <div className='dogAccesorie'>

        <Link to="/productDetail">
            <figure className='dogAccesorieWrapper'>
                <img className='dogAccesorieImage' src={products.imgURL} alt="" />
            </figure>
        </Link>

        <div className='dogAccesorieTitle'>
            <Link to="/productDetail" className='dogAccesorieTitleLink'>
                {products.name}
            </Link>
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