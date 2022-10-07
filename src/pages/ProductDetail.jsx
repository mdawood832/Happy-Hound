
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { Component } from 'react'
import { Link , useParams, useLocation} from 'react-router-dom'
import '../css/ProductDetail.css'

function ProductDetail({products, handleDeleteProduct}){
    const { id } = useParams()
    const product = products.find(product => product._id === id)

    return (
        <div className='productBody'>
            <main id="productMain">
                <div className="productContainer">
                    <div className="row">

                        <div className='backToProducts'>
                            <Link to='/products' className='productsLink'>
                               <h2> <FontAwesomeIcon icon='arrow-left' />  &nbsp; Dog Accessories </h2>
                            </Link>
                        </div>

                        <figure className='productFigure'>
                                    <img className='productImage' src={product.imgURL} alt={product.name}/>
                        </figure>  

                        <div className="productTop float-child">
                            <div className='product'>
                                <div className='productBlock'>
                                    <div className='productTitle'>
                                        <h1>{product.name} </h1>
                                    </div> 
        
                                    <div className='productPrice'>
                                        <h3>{product.price} </h3>
                                    </div>
        
                                    <div className='productStars'>
                                        <FontAwesomeIcon icon='star'/>
                                        <FontAwesomeIcon icon='star'/>
                                        <FontAwesomeIcon icon='star'/>
                                        <FontAwesomeIcon icon='star'/>
                                        <FontAwesomeIcon icon='star'/>
                                    </div>
        
                                    <div className='productDescription'>
                                        <h4>{product.description} </h4>
                                    </div>
                                    
                                    <Link to='/cart'>
                                        <button className='addToCart'>
                                            Add to Cart
                                        </button>
                                    </Link>

                                </div>

                                <br/>
                                <br/>

                                <div className='editDelete'>
                                    <Link to={'/edit/'+ product._id} >
                                        <button className='editProduct' >
                                            Edit Product 
                                        </button>
                                    </Link>

                                    <br/>
                                    <br/>

                                    <Link to='/products'>
                                        <button className='deleteProduct' onClick={() => handleDeleteProduct(product._id)}>
                                            Delete Product
                                        </button> 
                                    </Link>
                                </div>

                            </div>
     
                        </div>
                    </div>
                </div>
            </main>
        </div>
      )
}





export default ProductDetail

