import React, { Component } from 'react'


class ProductDetail extends Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.product.name} </h1>
        <h2>Description: {this.props.product.description} </h2>
        <img src={this.props.product.imgURL} alt={this.props.product.name}/>
        <h3>Price: {this.props.product.price} </h3>
        <h4>type: {this.props.product.type} </h4>
      </div>
    )
  }
}

export default ProductDetail

