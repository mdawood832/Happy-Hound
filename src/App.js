import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing';

//add baseURL outside of APP
let baseURL = ''

if(process.env.NODE_ENV === 'developement') {  //NODE_ENV specifically is used to state whether a particular environment is a production or a development environment
  baseURL = 'http://localhost:3003'
} else {
  baseURL = 'your heroku bakend url here'
}
console.log('current base URL:', baseURL)


function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
    </div>
  );
}

export default App;
