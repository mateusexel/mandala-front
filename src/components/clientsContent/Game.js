import './clients-content.css';
import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import ExibitClothe from './ExibitClothe';
import Axios from 'axios';
import { runInThisContext } from 'vm';

class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      redirect: false,
      idx: 0
      
    };
    this.gameLike = this.gameLike.bind(this)
  }

  
    
  gameLike(){
    this.setState((prevState) =>{
      return {idx: prevState.idx+1}
    })

  }

  gameUnLike(){
    this.setState((prevState) =>{
      return {idx: prevState.idx+1}
    })

  }

  
  render(){
  return(
    <div>
      <div className='game'>
      <img src={this.props.state.clothes[this.state.idx].imageUrl} alt="oioi"/>
      <labe>{this.props.state.clothes[this.state.idx].name}</labe>
      </div>
      <div>
      <button className='game-btn' onClick={() => this.gameLike()}>UnLike</button>
      <button className='game-btn' onClick={() => this.gameUnLike()}>Like</button>
      </div>
    </div>
  )
}
}
export default Game;