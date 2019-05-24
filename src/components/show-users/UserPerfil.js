import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class UserPerfil extends Component {
  constructor(props){
    super(props) 
    this.state = {
      likes: [],
      render: false,
    }
  }
  
  componentDidMount() {
     axios.get(`http://localhost:5000/api/users/${this.props.match.params.id}`)
  .then(response => {
    this.setState({
      likes: response.data,
      render: !this.state.render
    }, () => {
    });
  })
  .catch((err) => {
    console.log(err);
  });
  }


  render(){
    return(
      <div>
        {
          this.state.render ?
          <h1>{this.state.likes[0].user_id.username}</h1>
          :
          <h1>Loading</h1>
        }
      <ul className='Clothes-Items'>
        {
          this.state.likes.map((e,idx) => {
            return<li className='ImgandLabel'>
              <img src={e.clothe_id.imageUrl} alt='oi'/>
              <label>{e.clothe_id.name} {e.user_id.usarname} </label> 
              </li>
        })}
      </ul>
      </div>
    )
  }
}
export default UserPerfil;