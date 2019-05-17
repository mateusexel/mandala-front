
import React from 'react';
import { Link } from 'react-router-dom';

const Blockitem = (props) => {
  return (
    <div className="item-style">
    <strong>{props.name}</strong>
    </div>
  )
}

export default Blockitem;
