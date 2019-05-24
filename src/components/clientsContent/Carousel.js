import React, { Component } from 'react';
import './clients-content.css';
import { Link } from 'react-router-dom';


const GameAd = () => {
  return (
    <Link  to='/game'><img className='outdoor' src='https://res.cloudinary.com/daaxuc13e/image/upload/v1558662640/sample/Screenshot_from_2019-05-23_22-49-53_ug7lsc.png' alt='oioi'/></Link>
  );
}

export default GameAd;