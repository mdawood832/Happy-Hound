import React from 'react'
import ProductDetail from './ProductDetail'

class CreateProduct extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            imgURL: '',
            description: '',
            type: '',
            price: ''
        }
    }

   

    // call this function on every keystroke in the form
    handleChange = (e) => {
        this.setState({
            //grabs all details as an object-dynamically
            [e.target.id]: e.target.value
        })
    }

    // call this when the user submits the form
    handleSubmit = (e) => {
        // e.preventDefault() //prevent page from refreshing
        fetch(`${process.env.REACT_APP_BACKEND_URL}/products`, {  //this returns a promise(an object)
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name, 
                imgURL: this.state.imgURL,
                description: this.state.description,
                type: this.state.type,
                price: this.state.price
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {  //this returns a promise(an object)
            if(res.ok) {  
                return res.json()
            }
            throw new Error(res)
        })
        .then(resJson => {  //this returns a promise(an object)
            console.log('New Product Form - resJson', resJson)
            this.props.handleAddProduct(resJson)
            this.setState({ 
                name: '',
                imgURL: '',
                description: '',
                type: '',
                price: ''
            })
        })
        .catch((err) => {console.log(err)})
    }

    render() {
        return (
            <>
            <h1>New Product</h1>
            <form onSubmit={this.handleSubmit} className='newProductForm' >
                <input 
                    id='name'
                    type='text' 
                    onChange={this.handleChange}
                    value={this.state.name}
                    placeholder='add a Product'
                    className='newProductInput'
                />
                <input 
                    id='imgURL'
                    type='text' 
                    onChange={this.handleChange}
                    value={this.state.imgURL}
                    placeholder='add image'
                    className='newProductInput'
                />
                <input 
                    id='description'
                    type='text' 
                    onChange={this.handleChange}
                    value={this.state.description}
                    placeholder='description'
                    className='newProductInput'
                />
                <input 
                    id='type'
                    type='text' 
                    onChange={this.handleChange}
                    value={this.state.type}
                    placeholder='type'
                    className='newProductInput'
                />
                <input 
                    id='price'
                    type='text' 
                    onChange={this.handleChange}
                    value={this.state.price}
                    placeholder='price'
                    className='newProductInput'
                />
                
                <input type="submit" value="Add a New Product" />
            </form>
            {/* {(this.state.product)
            ? <ProductDetail product={this.state.product} />
            : ''
            } */}
            </>
        )
    }
}

export default CreateProduct
