
import { faSave } from '@fortawesome/free-regular-svg-icons';
import React, {Component} from 'react'
import { Link } from "react-router-dom";
import '../css/EditProduct.css'

class ProductEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "", //originally had this as empty string but changed to prop to pass to current value???
      imgURL: "",
      description: "",
      type: "",
      price: "",
    };
  }

//   componentDidMount() {
//     this.getProduct();
//   }
//   getProduct = async () => {
//     const { id } = this.props.match.params; //this is the id of the product I dont know why its undefined
//     const response = await fetch(`http://localhost:3000/products/${id}`);
//     const data = await response.json();
//     this.setState({
//       name: data.name,
//       imgURL: data.imgURL,
//       description: data.description,
//       type: data.type,
//       price: data.price,
//     });
//   };



  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };



  
  render() {
    return (
      <>
        <h1>Edit Product</h1>
        <div className="createContainer">
          <form onSubmit={this.props.handleEditProduct} className="EditForm">
            <input
              id="name"
              type="text"
              onChange={this.handleChange}
              value={this.props.name}
              placeholder="Edit Product Name"
              className="editProductInput"
            />
            <input
              id="imgURL"
              type="text"
              onChange={this.handleChange}
              value={this.props.imgURL}
              placeholder="Edit image"
              className="editProductInput"
            />
            <input
              id="description"
              type="text"
              onChange={this.handleChange}
              value={this.props.description}
              placeholder="Edit description"
              className="editProductInput"
            />
            <input
              id="type"
              type="text"
              onChange={this.handleChange}
              value={this.props.type}
              placeholder="Edit type"
              className="editProductInput"
            />
            <input
              id="price"
              type="text"
              onChange={this.handleChange}
              value={this.props.price}
              placeholder="Edit price"
              className="editProductInput"
            />

            <input
              type="submit"
              className="submitFormButton"
              value="Edit Product"
            />
          </form>
        </div>
      </>
    );
  }
}
export default ProductEdit
