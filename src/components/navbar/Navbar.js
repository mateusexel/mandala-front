import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../auth/auth-service';

class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({...this.state, loggedInUser: nextProps["userInSession"]});
  }

  logoutUser = () =>{
    this.service.logout()
    .then(() => {
      this.setState({ loggedInUser: null });
      this.props.getUser(null);  
    })
  }

  render(){
    if(this.state.loggedInUser){
      if(this.state.loggedInUser.adm){
        return(
          <nav className="nav-style">
            <ul>
              <li>Welcome, {this.state.loggedInUser.username}</li>
              <li><Link to='/'><button onClick={() => this.logoutUser()}>Logout</button></Link></li>
              <li><Link to='/addclothe'>Add Clothe</Link></li>
              <li><Link to='/showclothes'>Show Clothes</Link></li>
              <li><Link to='/'>Home</Link></li>
            </ul>
          </nav>
        )
      }else{
        return(
          <nav className="nav-style">
            <ul>
              <li>Welcome, {this.state.loggedInUser.username}</li>
              <li><Link to='/filter/calca'>Calcas</Link></li>
              <li><Link to='/filter/camisa'>Camisas</Link></li>
              <li><Link to='/filter/jaqueta'>Jaquetas</Link></li>
              <li><Link to='/filter/camisa'>Regatas</Link></li>
              <li><Link to='/filter/vestido'>Vestidos</Link></li>
            </ul>
          </nav>
        )
      }
    } else {
      return ( 
        <nav className="nav-style">
          <ul>
            <li><Link to='/' style={{ textDecoration: 'none' }}>Login</Link></li>
            <li><Link to='/signup' style={{ textDecoration: 'none' }}>Signup</Link></li>
          </ul>
        </nav>
      )
    }
  }
}

export default Navbar;