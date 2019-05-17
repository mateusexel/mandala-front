import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Block from './Block'

class Block extends Component {

  render(){
      return(
        <div className="box-style">
          <ul>
            <li><Blockitem img={image} label={label}/></li>
            <li><Blockitem/></li>
            <li><Blockitem/></li>
          </ul>
        </div>
      )
  }
}

export default Block;