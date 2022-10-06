import "../css/Products.css";
import Features from "../components/ui/Features";
import React, { Component } from "react";
import { Link } from "react-router-dom";


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
     products: []
    };
  }


  render() {
    // console.log(this.props)
    return (
      <div className="App">
        <h1>Products</h1>
        
        {this.props.products.map((product, index) => {
          return (
              <div className="productsContainer" key={index}>
                      
                        <h2 className="sectionTitle">{product.name}</h2>
                   

                      <Link to={'/detail/'+ product._id}>
                        <img src={product.imgURL} />
                      </Link>
              </div>
          );
        })}



      </div>
    );
  }
}

export default Products
