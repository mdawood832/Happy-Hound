import React, {Component} from 'react'
import './css/App.css'
import Nav from './components/Nav'
import Landing from './components/Landing';
import Featured from './components/Featured';
import ExploreMore from './components/ExploreMore';
import Footer from './components/Footer';

// add base URl 
let baseURL = ''
if (process.env.NODE_ENV === 'development' ){
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'heroku backend uRL '
}

// console.log('current base URL' , baseURL)


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }


  componentDidMount() {
    this.getProducts()
  }


  getProducts = () => {
    fetch(baseURL + '/products')
      .then(res => {
          if(res.status === 200){
            return res.json()
          } else {
            return []
          }
      }).then(data =>{
          console.log(data)
          this.setState({products: data.products})
      })
  }


  render() {
    return (
      <div className='App'>
        <Nav/>
        <Landing/>
        {/* <Featured/> */}
        <table>
        <tbody>
          { this.state.products.map(products => {
              return (
                <tr>
                  <td key={products._id} > {products.name }</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
        <ExploreMore/>
        {/* <Footer/> */}
      </div>
    );
  }
}


export default App;
