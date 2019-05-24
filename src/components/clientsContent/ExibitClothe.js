import './clients-content.css';
import React, {Component} from 'react';
import service from '../api/service';

class ExibitClothe extends Component {
  constructor(props){
    super(props)
  }
  render(){
    let like = {
      user_id: this.props.user._id,
      clothe_id: this.props.clothe._id
    }
    console.log(this.props)
  
  return(
    <div className='clothe-dialog'>
      <img className='img-dialog'src={this.props.clothe.imageUrl} alt="oioi"/>
      <div>
        <h1>{this.props.clothe.name}</h1>
        <h2>R${this.props.clothe.price},00 </h2>
        <p>{this.props.clothe.type1} </p>
        <p>{this.props.clothe.type1} </p>
        <button onClick={() => service.addLike(like)}>Like</button>
        </div>
    </div>
  )
}
}
export default ExibitClothe;

