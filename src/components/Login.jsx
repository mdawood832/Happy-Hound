import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			password: ''
		};

		this.update = this.update.bind(this);

		this.displayLogin = this.displayLogin.bind(this);
	}

	update(e) {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value
		});
	}
	// Register method 
	// fetch to the backend route users/signup
	// console log what returns from the server


	displayLogin(e) {
		e.preventDefault();
		console.log('You are logged in');
		window.location.href = '/';
		console.log(this.state);
		this.setState({
			username: '',

			password: ''
		})
		// take data from form and call register 
		// console log what returns from the server

	}

	render() {
		return (
			<div className="login">
				<form onSubmit={this.displayLogin}>
					<h2>Login</h2>
					<div className="username">
						<input
							type="text"
							placeholder="Username..."
							value={this.state.username}
							onChange={this.update}
							name="username"
						/>
					</div>

					<div className="password">
						<input
							type="password"
							placeholder="Password..."
							value={this.state.password}
							onChange={this.update}
							name="password"
						/>
					</div>

					<div className="button">
						<button type="submit">Login</button>
					</div>
				</form>

				<Link to="/register">Create an account</Link>
			</div>
		);
	}
}

export default Login;