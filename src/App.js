import React, { Component } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import AuthService from './components/auth/auth-service';

import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
//import Block from './components/block/Blockitem'
import Blockitem from './components/block/Blockitem';
import AddClothe from './components/AddClothe';
import Home from './components/home/Home';
import EditClothe from './components/clothe-edit/EditClothe';
import ShowClothes from './components/clothe-edit/ShowClothes';
import ShowUsers from './components/show-users/ShowUsers';
import UserPerfil from './components/show-users/UserPerfil';
import GameAd from './components/clientsContent/Carousel';
import TypeFilter from './components/clientsContent/TypeFilter';
import Game from './components/clientsContent/Game';
import ExibitClothe from './components/clientsContent/ExibitClothe'
import ClientsHome from './components/clientsContent/ClientsHome'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { loggedInUser: null, clothes: [], };
    this.service = new AuthService();
    this.fetchUser = this.fetchUser.bind(this);
    this.updateClothes = this.updateClothes.bind(this);
  }

  componentDidMount() {
    this.updateClothes()
  }

  updateClothes() {
    axios.get('http://localhost:5000/api/clothes')
      .then(response => {
        this.setState({
          clothes: response.data
        }, () => {
          console.log(this.state.clothes);
        });
      })
      .catch((err) => {
        console.log(err);
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
      if(this.state.loggedInUser.adm){
        return (
          <div className="App">
            <Navbar userInSession={this.state.loggedInUser} getUser={this.getTheUser}/>
            <Switch>
              <Route path='/edit/:id' render={(props) => <EditClothe state={this.state} {...props} updateClothes={this.updateClothes} />} />
              <Route path='/addclothe' render={(props) => <AddClothe updateClothes={this.updateClothes}/>}/>
              <Route path='/showclothes' render={(props) => <ShowClothes state={this.state}/>}/>
              <Route path='/showusers' render={(props) => <ShowUsers state={this.state}/>}/>
              <Route path='/userlikes/:id' render={(props) => <UserPerfil {...props} state={this.state}  />} />
              <Route exact path='/' render={(props) => <Home userInSession={this.state.loggedInUser} state={this.state}/>}/>
            </Switch>
          </div>
          );
      }else{
        return (
          <div className="App">
            <Navbar userInSession={this.state.loggedInUser}/>
            <GameAd/>
            <Switch >
              <Route path='/filter/:type' render={(props) => <TypeFilter {...props} state={this.state} />} />
              <Route exact path='/' render={(props) => <ClientsHome state={this.state}/>}/>
              <Route exact path='/game'  render={(props) => <Game userInSession={this.state.loggedInUser} {...props} state={this.state}/>}/>
            </Switch>
            
          </div>
        )
      }
    } else {
      return (
        <div className="App">
          <Navbar userInSession={this.state.loggedInUser} />
          <Switch> 
            <Route exact path='/signup' render={() => <Signup getUser={this.getTheUser}/>}/>
            <Route exact path='/login' render={() => <Login getUser={this.getTheUser}/>}/>
            <Route path='/' render={(props) => <Home userInSession={this.state.loggedInUser} state={this.state}/>}/>
          </Switch>
        </div>
      );
    }
  }
}
export default App;