import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';
import AuthService from './components/auth/auth-service';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Block from './components/block/Blockitem'
import Blockitem from './components/block/Blockitem';


class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null, clothes: [], };
    this.service = new AuthService();
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/clothes')
      .then(response => {
        this.setState({
          clothes: response.data
        }, () => {
          console.log(this.state.clothes);
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  fetchUser(){
    if( this.state.loggedInUser === null ){
      this.service.loggedin()
      .then(response =>{
        this.setState({
          loggedInUser:  response
        }) 
      })
      .catch( err =>{
        this.setState({
          loggedInUser:  false
        }) 
      })
    }
  }

  getTheUser= (userObj) => {
    this.setState({
      loggedInUser: userObj
    })
  }

  render() {
    this.fetchUser()
    if(this.state.loggedInUser){
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          {this.state.clothes.map((e,idx) => {
            return <Blockitem name = {e.name}/>
          })}
        </div>
      );
    } else {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          <Switch> 
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
            <Route exact path='/' render={() => <Login getUser={this.getTheUser}/>}/>
          </Switch>
          <Block/>
        </div>
      );
    }
  }
}
export default App;