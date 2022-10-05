import React, { Component } from "react";
import {  Link } from "react-router-dom";



let baseURL = "http://localhost:3003";


class Login extends Component {
  // creates a class component called Login
  constructor(props) {
    // constructor method that takes in props as an argument
    super(props); //   calls the super method and passes in props as an argument
    this.state = {
      //  sets the initial state of the component to an object with two properties
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    if (e.target.name === "username") {
      this.setState({ username: e.target.value });
    }
    if (e.target.name === "password") {
      this.setState({ password: e.target.value });
    }
  };

  loginUser = (e) => {
    e.preventDefault();
    const { username, password } = this.state;
    const user = { username, password };
    console.log("user", user);
    fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "*", //  default header for JSON data
      },
      credentials: "include", //  include the cookies in the request to the server
      body: JSON.stringify(user), //  convert the user object to a JSON string and set it as the body of the request
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data); //  log the data object to the console
        if (data.status === 200) {
          localStorage.setItem("token", data.token); // save token to local storage
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-md-offset-4">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Login</h3>

                <div className="panel-tools">
                  <Link to="/register" className="btn btn-link">Register</Link>
                </div>
              </div>
              <div className="panel-body">
                <form onSubmit={this.loginUser}>
                  <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
 export default Login; 

  