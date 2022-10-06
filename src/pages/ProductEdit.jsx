import { faSave } from "@fortawesome/free-regular-svg-icons";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class ProductEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imgURL: "",
      description: "",
      type: "",
      price: "",
    };
  }

  componentDidMount() {
    this.setState({
      name: this.props.name,
      imgURL: this.props.imgURL,
      description: this.props.description,
      type: this.props.type,
      price: this.props.price,
    });
    console.log(this.state, "state");
  }

  // call this function on every keystroke
  handleChange = (e) => {
    // console.log(e, 'e')
    this.setState({
      //grabs all details dynamically in this.state using e.target
      [e.target.id]: e.target.value,
    });
    // console.log(e.target.value)
    // console.log(e.target.id)
  };

  render() {
    console.log(this.props, "this.props.edit");
    console.log(this.state, "state after mount");
    return (
      <>
        <h1>Edit Product</h1>

        <form onSubmit={this.handleEditProduct} className="EditForm">
          <input
            id="name"
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            placeholder="Edit Product Name"
            className="editProductInput"
          />
          <input
            id="imgURL"
            type="text"
            onChange={this.handleChange}
            value={this.state.imgURL}
            placeholder="edit image"
            className="editProductInput"
          />
          <input
            id="description"
            type="text"
            onChange={this.handleChange}
            value={this.state.description}
            placeholder="edit description"
            className="editProductInput"
          />
          <input
            id="type"
            type="text"
            onChange={this.handleChange}
            value={this.state.type}
            placeholder=" edit type"
            className="editProductInput"
          />
          <input
            id="price"
            type="text"
            onChange={this.handleChange}
            value={this.state.price}
            placeholder="edit price"
            className="editProductInput"
          />

          <input type="submit" value="Edit Product" />
        </form>
      </>
    );
  }
}

export default ProductEdit;
