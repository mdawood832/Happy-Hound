import './css/App.css'
import Nav from './components/Nav'
import Landing from './components/Landing';
import Featured from './components/Featured';
import ExploreMore from './components/ExploreMore';
import Footer from './components/Footer';


const App = () => {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Featured/>
      <ExploreMore/>
      <Footer/>
    </div>
  );
}

export default App;
