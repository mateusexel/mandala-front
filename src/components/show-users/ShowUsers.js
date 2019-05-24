import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class ShowClothes extends Component {
  constructor(props){
    super(props) 
    this.state = { users: []}
  }
  
  componentDidMount() {
     axios.get('http://localhost:5000/api/users')
  .then(response => {
    this.setState({
      users: response.data
    }, () => {
      console.log(this.state.users);
    });
  })
  .catch((err) => {
    console.log(err);
  });
  }


  render(){
    return(
      <ul className='Clothes-Items'>
        {
          this.state.users.map((e,idx) => {
            return <Link to={`/userlikes/${e._id}`} key={idx}><li className='ImgandLabel'>
              <p>{e.username}</p> 
              {e.email}
              </li></Link>
        })}
      </ul>
    )
  }
}
export default ShowClothes;