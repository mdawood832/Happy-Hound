import React, { Component } from "react";
// import './App.css';
// import ProductDetail from './ProductDetail'
 import CreateProduct from './ProductCreate'
import ProductDetail from "./ProductDetail";
import ProductEdit from './ProductEdit'
import { Route, Routes, Link } from 'react-router-dom'; 

// newer version of "create-react-app" you cant force process.env.NODE_ENV so we will just hard code this
let baseURL = process.env.REACT_APP_BACKEND_URL;
// console.log('current base URL:', baseURL)

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    fetch(baseURL + "/products")
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          return [];
        }
      })
      .then((data) => {
				console.log('data', data);
				// just a quick fix for this to work (data returns undefined...)
				if (data === []) {
					this.setState({ products: data})
				} else {
					this.setState({ products: data.products });
				}
			});
	};

  handleAddProduct = (product) => {
		const copyProducts = [...this.state.products];
		copyProducts.unshift(product);
		this.setState({ products: copyProducts });
	};

  handleEditProduct = (product) => {
    fetch(baseURL + '/products/' + product._id, {
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
        // console.log(resJson)
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

  handleDeleteProduct = (id) => {
    fetch(baseURL + '/products/' + id, {
      method: 'DELETE'
    }).then( response => {
      const findIndex = this.state.products.findIndex(product => product._id === id)
      const copyProducts = [...this.state.products]
      copyProducts.splice(findIndex, 1)
      this.setState({products: copyProducts})
    })
  }

  render() {
		return (
			<div className='App'>
				<h1>Products</h1>
        
				<CreateProduct handleAddProduct={this.handleAddProduct} />
        

				
						{this.state.products.map((product, index) => {
							return (
                
								<div key={index}>
								 <img src={product.imgURL}/> 
									{product.name}
									
									<button onClick={() => this.handleDeleteProduct(product._id)}>Delete Product</button>
								
                  
                </div>
                
							);
              
						})}
					


			</div>
		);
	}
}

export default Products;
