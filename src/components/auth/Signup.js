import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth-service';

class Signup extends Component {
  constructor(props){
    super(props);
    this.state = { email: '', username: '', password: '' };
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
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Email:</label>
          <input type="text" name="email" value={this.state.email} onChange={ e => this.handleChange(e)}/>
          
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          
          <label>Password:</label>
          <input type="password" name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Signup" />
        </form>
  
        <p>Already have account? 
            <Link to={"/"}> Login</Link>
        </p>
  
      </div>
    )
  }
}

export default Signup;