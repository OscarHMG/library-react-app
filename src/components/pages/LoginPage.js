import React, { Component } from "react";
import '../../resources/css/LoginPage.css';
import avatar from '../../resources/images/avatar.png';
import Validator from "validator";


export default class LoginPage extends Component {

	state = {
		data:{
			email:'',
			password:''
		},
		isSubmitting : false,
		errors: {}
	};



	handleChange = (event) =>{
		this.setState({
			data:{...this.state.data, [event.target.name]: event.target.value}
		});
		
		console.log(this.state.data);
	}


	onSubmit = (event) =>{
		event.preventDefault();
		const errors = this.validateForm(this.state.data);
		this.setState({
			errors : errors
		});

		if(Object.keys(errors).length === 0)
			console.log('Time to submit');
	}

	validateForm = (data) =>{
		const errors = {};
		if(!Validator.isEmail(data.email))
			errors.email = "Email is not valid";

		if(data.password === "")
			errors.password = "Password can not be blank";

		return errors;
	} 

	



	//Render function
  render() {
		const { data, errors } = this.state;
	
    return (
			<div className="row containerRow">
				<div className="login-container">
					<div id="output"></div>
					<div className="avatar">
						<img src={avatar}/>
					</div>
					<div className="form-box">
						<form onSubmit={this.onSubmit}>
							<div className="form-row mb-1">
								<div className="col-md-12 mb-3">
									<input className="form-control" type="text" name="email" value={data.email} placeholder="example@domain.com" onChange={this.handleChange}/>
									<span className="help-block text-danger"><small><strong>{errors.email !== undefined ? errors.email : ''}</strong></small></span>
									
								</div>
							</div>
							<div className="form-row">
    						<div className="col-md-12 ">
								<input className="form-control" type="password" name="password" value={data.password} placeholder="Type your password" onChange={this.handleChange}/>
								<span className="help-block text-danger"><small><strong>{errors.password !== undefined ? errors.password : ''}</strong></small></span>

								</div>
							</div>

							<button type="submit" className="btn btn-info btn-block mt-3">Login</button>
						</form>
					</div>
        </div>
			</div>
    );
	}
}
