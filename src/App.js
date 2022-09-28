import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Routes>
      <Route exact path="*" component={Landing} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Routes>
      </div>
       
         
        
    );
  }
}

export default App;
