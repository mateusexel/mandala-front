import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import Blockitem from './Blockitem'

const Block extends = (props) => {
  return (
    <div className="box-style">
      <ul>
        <li><Blockitem img={image} label={label}/></li>
        <li><Blockitem/></li>
        <li><Blockitem/></li>
      </ul>
    </div>
  )
}


export default Block;