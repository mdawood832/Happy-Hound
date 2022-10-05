
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
                                <img src={this.props.imgURL} alt={this.props.name}/>
                            </figure>  

                            <div className='productTitle'>
                                <h1>Name: {this.props.name} </h1>
                            </div> 

                            <div className='productPrice'>
                                <h3>Price: {this.props.price} </h3>
                            </div>

                            <div className='productStars'>
                                <FontAwesomeIcon icon='star'/>
                                <FontAwesomeIcon icon='star'/>
                                <FontAwesomeIcon icon='star'/>
                                <FontAwesomeIcon icon='star'/>
                                <FontAwesomeIcon icon='star'/>
                            </div>

                            <div className='productDescription'>
                                <h2>Description: {this.props.description} </h2>
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

