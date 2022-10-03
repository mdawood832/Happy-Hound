
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Features from '../components/ui/Features'



class ProductDetail extends Component{
    render () {
  return (
    <div className='productBody'>
        <main id="productMain">
            <div className="productContainer">
                <div className="row">
                    <div className="productTop">
                        <Link to='/products' className='productsLink'>
                            <FontAwesomeIcon icon='arrow-left' />
                        </Link>
                        <Link to='/products' className='productsLink'>
                           <h2> Dog Accessories </h2>
                        </Link>

                        <div className='product'>
                            <figure className='productFigure'>
                                <img src="https://i.imgur.com/QKJdE6n.jpg" alt="" />
                            </figure>  

                            <div className='productTitle'>
                                <h2>
                                SlowTon Hands-Free Padded & Adjustable Sling Dog Carrier
                                </h2>
                            </div> 

                            <div className='productPrice'>
                                <h2>
                                25.99
                                </h2>
                            </div>

                            <div className='productStars'>
                                <FontAwesomeIcon icon='star'/>
                                <FontAwesomeIcon icon='star'/>
                                <FontAwesomeIcon icon='star'/>
                                <FontAwesomeIcon icon='star'/>
                                <FontAwesomeIcon icon='star'/>
                            </div>

                            <div className='productDescription'>
                                <p>
                                This carrier sling is fully adjustable to any height and features a thick padded strap to help prevent shoulder aches.
                                </p>
                            </div>

                            <button className='addToCart'>
                                Add to Cart
                            </button>
                        </div>
 
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
    }
}

export default ProductDetail

