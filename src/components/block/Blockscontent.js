import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Block from './Block'

class Blockscontent extends Component {

  render(){
      return(
        <div className="box-style">
          <ul>
            <li><Block img={image} label={label}/></li>
            <li><Block/></li>
            <li><Block/></li>
          </ul>
        </div>
      )
  }
}

export default Blockscontent;