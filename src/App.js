import './css/App.css'
import Nav from './components/Nav'
import Landing from './components/Landing';
import Featured from './components/Featured';
import ExploreMore from './components/ExploreMore';


function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <Featured/>
      <ExploreMore/>
    </div>
  );
}

export default App;
