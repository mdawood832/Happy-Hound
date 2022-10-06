 import React from 'react';
import { Route, Routes,} from 'react-router-dom'; 
import Login from './components/Login';
import Register from './components/Register';
import Landing from './components/Landing';
import Nav from './components/Nav';
import './App.css';
 


function App() {

    return (
        <div className="App">
            <Nav />

            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}


export default App;
      