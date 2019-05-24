import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth-service';
import { Redirect } from 'react-router-dom';


class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', username: '', password: '',redirect: false, };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
  
    this.service.signup(username, password, email)
    .then( response => {
        this.setState({
            email: "",
            username: "", 
            password: "",
            redirect: !this.state.redirect,
        });
        this.props.getUser(response)
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const { name, value } = event.target;
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
            <label  className='auth-form-item'>Email:</label>
            <input  className='auth-form-item' type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
            
            <label  className='auth-form-item'>Username:</label>
            <input  className='auth-form-item' type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
            
            <label  className='auth-form-item'>Password:</label>
            <input  className='auth-form-item' type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
            
            <input  className='auth-form-item' type="submit" value="Signup" />
          </form>
    
          <p>Already have account? 
              <Link to={"/"}> Login</Link>
          </p>
    
        </div>
      )
    } 
  }
}

export default Signup;