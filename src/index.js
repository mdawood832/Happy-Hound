import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faShoppingCart,
  faStar,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

import { BrowserRouter } from "react-router-dom";

library.add(faShoppingCart, faStar, faArrowLeft);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

