import React, { Component } from 'react'
import '../css/Products.css'
import Features from '../components/ui/Features'

// newer version of "create-react-app" you cant force process.env.NODE_ENV so we will just hard code this
let baseURL = process.env.REACT_APP_BACKEND_URL
// console.log('current base URL:', baseURL)


class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount(){
    this.getProducts()
  }
  

  getProducts = () => {
    fetch(baseURL + '/products')
     .then((res) => {
      if (res.status === 200) {
       return res.json();
      } else {
       return [];
      }
     })
     .then((data) => {
      console.log(data);
      this.setState({ products: data.products });
     });
   }


  render () {
    return (
      <div className='container'>
        <div id="productsBody">
        <main id= "productsMain">
            <section>
                <div className="productsContainer">
                    <div className="row">
                        <div className="productsHeader">
                            <h2 className="sectionTitle">Dog Accessories</h2>
                            {/* <select id="filter" defaultValue='default'>
                                <option value="default" >Sort</option>
                                <option value="lowToHigh">Price, Low to High</option>
                                <option value="highToLow">Price, High to Low</option>
                            </select> */}
                        </div>
                        <div className='products'>
                          {
                            this.state.products.map((products) => (
                              <Features products={products} key={products._id}/>
                            ))
                          }
                        </div>
                    </div>
                </div>
            </section>
        </main>
      </div>
    </div>
    )
  }
 }


export default Products;
