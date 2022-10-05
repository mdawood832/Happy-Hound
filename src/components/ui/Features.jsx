import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import ProductDetail from '../../pages/ProductDetail'
import { useParams} from 'react-router-dom'

const Features = ({products}) => {
    const {id} = useParams()
  return (
    <div className='dogAccesorie'>
        {/* <ProductDetail products={products} key={products._id} */}
        <Link to={'/products/:id'}>
            <figure className='dogAccesorieWrapper'>
                <img className='dogAccesorieImage' src={products.imgURL} alt="" />
            </figure>
        </Link>

        <div className='dogAccesorieTitle'>
            <Link to={"/products/:id"} className='dogAccesorieTitleLink'>
                {products.name}
                {products.id}
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