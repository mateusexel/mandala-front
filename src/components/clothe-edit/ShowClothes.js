import './clothes-edit-show.css';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ShowClothes extends Component {
  render(){
    return(
      <ul className='Clothes-Items'>
        {
          this.props.state.clothes.map((e,idx) => {
            return <Link to={`/edit/${e._id}`} key={idx}><li className='ImgandLabel'>
              <img src={e.imageUrl} alt='uhjns'/>
              <label>{e.name}</label>
              </li></Link>
        })}
      </ul>
    )
  }
}
export default ShowClothes;