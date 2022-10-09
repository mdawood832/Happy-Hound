
import { faSave } from '@fortawesome/free-regular-svg-icons';
import React, {Component} from 'react'


let baseURL = process.env.REACT_APP_BACKEND_URL;
// console.log('current base URL:', baseURL)

class ProductEdit extends Component {
    constructor(props){
        super(props)
        this.state = {     
            name: '', 
            imgURL: '',
            description: '',
            type: '',
            price: '',
            id: ''
        }
    }



handleChange = (e) => {
    this.setState({
      //grabs all details dynamically in this.state using e.target
      [e.target.id]: e.target.value,
    });
   
  };

//   handleEditProduct = (e, product) => {
//       e.preventDefault()
      
//     fetch(baseURL + '/products/' + product._id, {
//         method: 'PUT',
//         body: JSON.stringify({
//             name: this.state.name,
//             imgURL: this.state.imgURL,
//             description: this.state.description,
//             type: this.state.type,
//             price: this.state.price,
//             id: this.state.price
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         credentials: "include"
//     })
//     .then((res) => res.json())
//     .then((resJson) => {
//         console.log(resJson)
//         const copyProducts = [...this.state.products];
//         const findIndex = this.state.products.findIndex(
//             (product) => product._id === resJson._id
//         );
//         copyProducts[findIndex] = resJson
//         this.setState({
//             products: copyProducts,
//         });
//         // this.props.handleEditProduct(resJson._id)
//         console.log(this.props)
//     });
// };




// preventDefaultOnSubmit = (e) => {
//   e.preventDefault()
//    const product = this.state
//    console.log(product, 'brownie')
//    this.props.handleEditProduct(e, product)
//    console.log(e, 'e')
// }

 

    render() { 
        console.log(this.props, "this.props.edit");
    return (
      <>
     
        <h1>Edit Product</h1>

        <form onSubmit={this.handleEditProduct} className="EditForm">

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
