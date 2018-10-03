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


	/*
	 * WIDGETS FUNCTIONS
	 */
	//Input event
	handleChange(event){
		this.setState({
			data:{...this.state.data, [event.target.name]: event.target.value}
		});

		console.log(this.state.data);

	}


	onSubmit = () =>{
		const errors = this.validateForm(this.state.data);
		console.log(errors);
		this.setState({
			errors : errors
		});
	}

	validateForm = (data) =>{
		const errors = {};
		if(!Validator.isEmail(data.email))
			errors.email = "Email format is wrong";

		if(data.password === "")
			errors.password = "Password can not be blank";

		return errors;
	} 

	



	//Render function
  render() {
		const { data, errors } = this.state;
		
		//className={`form-control ${errors.email !== undefined ? 'is-invalid': ''}`}
		//className={`form-control ${errors.password !== undefined ? 'is-invalid': ''}`}
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
									<input className={"form-control " + errors.email !== undefined? "is-invalid": ""} type="email" name="email" value={data.email} placeholder="example@domain.com" onChange={this.handleChange}/>
									<div className="invalid-feedback">
										Enter a valid email
									</div>
								</div>
							</div>
							<div className="form-row">
    						<div className="col-md-12 ">
								<input className={"form-control "+ errors.password !== undefined? "is-invalid": ""} type="password" name="password" value={data.password} placeholder="Type your password" onChange={this.handleChange}/>
									<div className="invalid-feedback">
										Password can't no be blank
									</div>
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
