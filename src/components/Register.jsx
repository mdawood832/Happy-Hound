import React, { Component } from 'react';


class Register extends Component {
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

	displayLogin(e) {
		e.preventDefault();
		console.log('You have successfully registered');
		console.log(this.state);
		this.setState({
			username: '',
			password: ''
		});
	}

	render() {
		return (
			<div className="register">
				<form onSubmit={this.displayLogin}>
					<h2>Register</h2>
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

					<div className="submit">
						<input type="submit" value="Register" />
					</div>
				</form>
			</div>
		);
	}
	
}

export default Register;








	
		
		