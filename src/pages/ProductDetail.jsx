import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'



class ProductDetail extends Component {
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
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
    }
}

export default ProductDetail