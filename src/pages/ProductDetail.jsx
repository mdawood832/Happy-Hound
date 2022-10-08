
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link , useParams} from 'react-router-dom'
import '../css/ProductDetail.css'

function ProductDetail({products, handleDeleteProduct, handleEditProduct}){
    const { id } = useParams()
    const product = products.find(product => product._id === id)
    
        // call this function on every keystroke
        const handleChange = (e) => {
            this.useState({
                //grabs all details dynamically in this.state using e.target
                [e.target.id]: e.target.value
            })
        }


    return (
        <div className='productBody'>
            <main id="productMain">
                <div className="productContainer">
                    <div className="row">

                        <div className='backToProducts'>
                            <Link to='/products' className='productsLink'>
                               <h2> <FontAwesomeIcon icon='arrow-left' />  &nbsp; Products </h2>
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
                                    <Link to='/edit/:id'>
                                        <button className='editProduct'>
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

            <>
                <h1>Edit Product</h1>
                <div className='createContainer'>
                <form onSubmit={this.props.handleEditProduct} className='EditForm' >
    
                    <input 
                        id='name'
                        type='text' 
                        onChange={handleChange()}
    
                        value={product.name}
    
                        placeholder='Edit Product Name'
                        className='editProductInput'
                    />
                    <input 
                        id='imgURL'
                        type='text' 
                        onChange={handleChange()}
    
                        value={product.imgURL}
    
                        placeholder='Edit image'
                        className='editProductInput'
                    />
                    <input 
                        id='description'
                        type='text' 
                        onChange={handleChange()}
    
                        value={product.description}
    
                        placeholder='Edit description'
                        className='editProductInput'
                    />
                    <input 
                        id='type'
                        type='text' 
                        onChange={handleChange()}
    
                        value={product.type}
    
                        placeholder='Edit type'
                        className='editProductInput'
                    />
                    <input 
                        id='price'
                        type='text' 
                        onChange={handleChange()}
    
                        value={product.price}
    
                        placeholder='Edit price'
                        className='editProductInput'
                    />
                    
                   <input type="submit"className='submitFormButton' value="Edit Product" />
                </form>
                </div>
                </>



        </div>

        
      )
}





export default ProductDetail

