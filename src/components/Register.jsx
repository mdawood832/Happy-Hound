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
			 <div className="container"> 
			 	 <div className="row">
			 	 	<div className="col-md-4 col-md-offset-4">
			 	 		<div className="panel panel-default">
			 	 			<div className="panel-heading">
						<h3 className="panel-title">Register</h3>
					</div>
					<div className="panel-body">
						<form onSubmit={this.displayLogin}>
							<div className="form-group">
								<label htmlFor="username">Username</label>
								<input type="text" className="form-control" name="username" value={this.state.username} onChange={this.update} />
							</div>
							<div className="form-group">
								<label htmlFor="password">Password</label>
								<input type="password" className="form-control" name="password" value={this.state.password} onChange={this.update} />
							</div>
							<button type="submit" className="btn btn-success">Register</button>
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
		
		