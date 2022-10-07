import "../css/Products.css";
import Features from "../components/ui/Features";
import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProductEdit from "./ProductEdit";


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
     products: []
    };
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <h1 className="productTitle">Products</h1>
        <div  className="products">
        {this.props.products.map(product => {
          return (
              <div className="productsContainer" key={product._id}>

                      <Link to={'/detail/'+ product._id} state={{ product }}>
                        <img src={product.imgURL} />
                      </Link>

                     
                     
                          <h3 className="sectionTitle">{product.name}</h3>
                     
                     
                      
                      <div className="productDetails">
                        <h4 className="productPrice" > {product.price} </h4>
                        <div className='productStars'>
                                      <FontAwesomeIcon icon='star'/>
                                      <FontAwesomeIcon icon='star'/>
                                      <FontAwesomeIcon icon='star'/>
                                      <FontAwesomeIcon icon='star'/>
                                      <FontAwesomeIcon icon='star'/>
                        </div>
                      </div>

              </div>
          );
        })}
        </div>



      </div>
    );
  }
}

export default Products
