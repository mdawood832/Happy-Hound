import React, { Component } from 'react';


class Register extends Component {

	 
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}

	registerUser = (e) => {
		e.preventDefault();
		const { username, password } = this.state;
		const { history } = this.props;
		const user = { username, password };
		console.log('user', user);
		fetch('http://localhost:3000/users/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
			.then((res) => res.json())
			.then((data) => {
				console.log('data', data);
				if (data.status === 200) {
					localStorage.setItem('token', data.token); // save token to local storage
					history.push('/'); // redirect to home page
				}
			})
			.catch((err) => {
				console.log('err', err);
			});
	}

	handleChange = (e) => {
		if (e.target.name === 'username') {
			this.setState({ username: e.target.value });
		}
		if (e.target.name === 'password') {
			this.setState({ password: e.target.value });
		}

	}

	render() {

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-md-offset-4">
						<div className="panel panel-default">
							<div className="panel-heading">
								<h3 className="panel-title">Register</h3>
							</div>
							<div className="panel-body">
								<form onSubmit={this.registerUser}>
									<div className="form-group">
										<label htmlFor="username">Username</label>
										<input type="text" className="form-control" name="username" value={this.state.username} onChange={this.handleChange} />
									</div>
									<div className="form-group">
										<label htmlFor="password">Password</label>
										<input type="password" className="form-control" name="password" value={this.state.password} onChange={this.handleChange} />
									</div>
									<button type="submit" className="btn btn-primary">Register</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Register;
   