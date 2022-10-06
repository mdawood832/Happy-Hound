import "../css/Products.css";
import Features from "../components/ui/Features";
import React, { Component } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
        {this.props.products.map((product, index) => {
          return (
              <div className="productsContainer" key={index}>

                      <Link to={'/detail/'+ product._id}>
                        <img src={product.imgURL} />
                      </Link>

                      <Link to="/edit/:id">
                          <h3 className="sectionTitle">{product.name}</h3>
                      </Link>
                      
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
