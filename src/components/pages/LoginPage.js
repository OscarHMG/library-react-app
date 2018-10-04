import React, { Component } from "react";
import avatar from "../../resources/images/avatar.png";
import Validator from "validator";
import LoginForm from "./../forms/LoginForm";

export default class LoginPage extends Component {
  //Render function

  submit = (data) =>{

  }


  render() {
    return <LoginForm submit ={this.submit}/>;
  }
}
