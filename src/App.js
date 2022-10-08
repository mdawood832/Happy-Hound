
import './css/App.css'
import ProductDetail from './pages/ProductDetail'
import React, {Component} from 'react'
 import './css/App.css'
import Nav from './components/Nav'
import Landing from './components/Landing';
import Products from './pages/Products';
import { Route, Routes } from 'react-router-dom'; 
import Footer from './components/Footer';
import ProductEdit from './pages/ProductEdit';
import CreateProduct from './pages/ProductCreate';
import Cart from './pages/Cart'
import ExploreMore from './components/ExploreMore'
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer'
import AboutUs from './pages/AboutUs'




// newer version of "create-react-app" you cant force process.env.NODE_ENV so we will just hard code this
let baseURL = process.env.REACT_APP_BACKEND_URL;
// console.log('current base URL:', baseURL)

class App extends Component {
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
        console.log("data", data);
        // just a quick fix for this to work (data returns undefined...)
        if (data === []) {
          this.setState({ products: data });
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
    fetch(baseURL + "/products/" + id, {
      method: "DELETE",
    }).then((response) => {
      const findIndex = this.state.products.findIndex(
        (product) => product._id === id
      );
      const copyProducts = [...this.state.products];
      copyProducts.splice(findIndex, 1);
      this.setState({ products: copyProducts });
    });
  };
  render() {
    // console.log(this.state)
  return (
    <div className="App">
    
      <Nav /> 
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path= '/' element={<Nav />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path='/products' element={<Products products={this.state.products} handleDeleteProduct={this.handleDeleteProduct}/>} />
        <Route path='/edit/:id' element={ <ProductEdit products={this.state.products} handleEditProduct={this.handleEditProduct} />}/>
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/cart' element={<Cart products={this.state.products}/>} />
        <Route path='/detail/:id' element={<ProductDetail products={this.state.products} handleEditProduct={this.handleEditProduct} handleDeleteProduct={this.handleDeleteProduct} />}/>
      </Routes>
      <Footer/>
     
    </div>

  );
}
}
export default App;
