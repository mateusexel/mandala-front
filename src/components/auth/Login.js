import React, { Component } from 'react';
import AuthService from './auth-service';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { username: '', password: '', redirect: false, };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.service.login(username, password)
    .then( response => {
        this.setState({ username: "",
         password: "" ,
         redirect: !this.state.redirect});
        this.props.getUser(response)
        console.log(this.state)
    })
    .catch( error => console.log(error) )
  }
    
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
    
  render(){
    if (this.state.redirect) {
      return <Redirect to="/" />
    }else{
      return(
        <div className='auth'>
          <img className='logo' src='https://res.cloudinary.com/daaxuc13e/image/upload/v1558667551/sample/download_xhfde2.jpg' alt='oioioi'/>
          <form onSubmit={this.handleFormSubmit} className='auth-form'>
            <label className='auth-form-item'>Username:</label>
            <input className='auth-form-item' type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
            <label className='auth-form-item'>Password:</label>
            <input className='auth-form-item' type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            
            <input  className='auth-form-item' type="submit" value="Login" />
          </form>
          <p>Don't have account? 
              <Link to={"/signup"} > Signup</Link>
          </p>
        </div>
      )
    }
  }
}

export default Login;