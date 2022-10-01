import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core'
<<<<<<< HEAD
import { faShoppingCart , faStar} from '@fortawesome/free-solid-svg-icons'
=======
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router } from "react-router-dom";
>>>>>>> origin/combined-branch


library.add(faShoppingCart , faStar)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
