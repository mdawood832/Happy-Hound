
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Link , useParams} from 'react-router-dom'
import Features from '../components/ui/Features'

function ProductDetail({products, handleDeleteProduct}){
    const { id } = useParams()
    const product = products.find(product => product._id === id)

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
                                    <img src={product.imgURL} alt={product.name}/>
                                </figure>  
    
                                <div className='productTitle'>
                                    <h1>Name: {product.name} </h1>
                                </div> 
    
                                <div className='productPrice'>
                                    <h3>Price: {product.price} </h3>
                                </div>
    
                                <div className='productStars'>
                                    <FontAwesomeIcon icon='star'/>
                                    <FontAwesomeIcon icon='star'/>
                                    <FontAwesomeIcon icon='star'/>
                                    <FontAwesomeIcon icon='star'/>
                                    <FontAwesomeIcon icon='star'/>
                                </div>
    
                                <div className='productDescription'>
                                    <h2>Description: {product.description} </h2>
                                </div>
    
                                <button className='addToCart'>
                                    Add to Cart
                                </button>

                                <br/>
                                <br/>
                                
                                <Link to='/edit/:id'>
                                    <button className='editProduct'>
                                        Edit Product 
                                    </button>
                                </Link>

                                <br/>
                                <br/>

                                <Link to='/products'>
                                    <button onClick={() => handleDeleteProduct(product._id)}>
                                        Delete Product
                                    </button> 
                                </Link>

                            </div>
     
                        </div>
                    </div>
                </div>
            </main>
        </div>
      )
}





export default ProductDetail

