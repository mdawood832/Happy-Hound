
import { faSave } from '@fortawesome/free-regular-svg-icons';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import App from '../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


  
    // edit a product in the database and update  the product that is displayed 
    // use functions from App.js to update the state of the products 
    // in the database



     


    class ProductEdit extends Component {
        constructor(props) {
            super(props)
            this.state = {
                product: {
                    name: '',
                    imgURL: '',
                    description: '',
                    type: '',
                    price: ''
                },
                isLoaded: false,
                error: null
            }
        }
    
        componentDidMount() {
            this.getProduct()
        }
    
        getProduct = () => {
            fetch(`${process.env.REACT_APP_BACKEND_URL}/products/${this.props.match.params.id}`)
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    return res.json().then(data => Promise.reject(data))
                }
            })
            .then(resJson => {
                this.setState({
                    product: resJson,
                    isLoaded: true
                })
            })
            .catch(error => {
                this.setState({
                    error: error,
                    isLoaded: true
                })
            })
        }
    
        handleChange = (e) => {
            const updatedProduct = {...this.state.product}
            updatedProduct[e.target.name] = e.target.value
            this.setState({product: updatedProduct})
        }
    
        handleSubmit = (e) => {
            e.preventDefault()
            fetch(`${process.env.REACT_APP_BACKEND_URL}/products/${this.props.match.params.id}`, {
                method: 'PUT',
                body: JSON.stringify(this.state.product),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    return res.json().then(data => Promise.reject(data))
                }
            })
            .then(resJson => {
                this.props.handleUpdateProduct(resJson)
                this.props.history.push(`/products/${this.props.match.params.id}`)
            })
            .catch(error => {
                this.setState({
                    error: error
                })
            })
        }
      
        render() {
       return ( 
            <>
            <h1>Edit Product</h1>

            <form onSubmit={this.props.handleEditProduct} className='EditForm' >

                <input 
                    id='name'
                    type='text' 
                    onChange={this.handleChange}

                    value={this.props.name}

                    placeholder='Edit Product Name'
                    className='editProductInput'
                />
                <input 
                    id='imgURL'
                    type='text' 
                    onChange={this.handleChange}

                    value={this.props.imgURL}

                    placeholder='edit image'
                    className='editProductInput'
                />
                <input 
                    id='description'
                    type='text' 
                    onChange={this.handleChange}

                    value={this.props.description}

                    placeholder='edit description'
                    className='editProductInput'
                />
                <input 
                    id='type'
                    type='text' 
                    onChange={this.handleChange}

                    value={this.props.type}

                    placeholder=' edit type'
                    className='editProductInput'
                />
                <input 
                    id='price'
                    type='text' 
                    onChange={this.handleChange}

                    value={this.props.price}

                    placeholder='edit price'
                    className='editProductInput'
                />
                
               <input type="submit" value="Edit Product" />
            </form>
            </>
        )
    }
}


    




export default ProductEdit