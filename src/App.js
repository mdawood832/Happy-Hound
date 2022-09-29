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

console.log('current base URL' , baseURL)


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      products: []
    }
  }





  render() {
    return (
      <div className='App'>
        <Nav/>
        <Landing/>
        <Featured/>
        <ExploreMore/>
        <Footer/>
      </div>
    );
  }
}


export default App;
