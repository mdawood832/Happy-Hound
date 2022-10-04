import React from 'react'
import { Link } from "react-router-dom";

class ProductEdit extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            imgURL: this.props.imgURL,
            description: this.props.description,
            type: this.props.type,
            price: this.props.price
        }
    }

    // call this function on every keystroke
    handleChange = (e) => {
        this.setState({
            //grabs all details dynamically in this.state using e.target
            [e.target.id]: e.target.value
        })
    }

    // call this when the user submits the form
    handleEditProduct = (product) => {
        fetch(`${process.env.REACT_APP_BACKEND_URL}/products/product._id`, {
            method: 'PUT',
            body: JSON.stringify({
                name: product.name, 
                imgURL: product.imgURL,
                description: product.description,
                type: product.type,
                price: product.price 
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((resJson) => {
            console.log(resJson)
            const copyProducts = [...this.state.products];
            const findIndex = this.state.products.findIndex(
                (product) => product._id === resJson._id
            );
            copyProducts[findIndex] = resJson
            this.setState({
                products: copyProducts,
            });
        });
};

    render() {
        return (
            <>
            <h1>Edit Product</h1>
            <form onSubmit={this.handleEditProduct} className='EditForm' >
                <input 
                    id='name'
                    type='text' 
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder='Edit Product Name'
                    className='editProductInput'
                />
                <input 
                    id='imgURL'
                    type='text' 
                    onChange={this.handleChange}
                    value={this.state.imgURL}
                    placeholder='edit image'
                    className='editProductInput'
                />
                <input 
                    id='description'
                    type='text' 
                    onChange={this.handleChange}
                    value={this.state.description}
                    placeholder='edit description'
                    className='editProductInput'
                />
                <input 
                    id='type'
                    type='text' 
                    onChange={this.handleChange}
                    value={this.state.type}
                    placeholder=' edit type'
                    className='editProductInput'
                />
                <input 
                    id='price'
                    type='text' 
                    onChange={this.handleChange}
                    value={this.state.price}
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
