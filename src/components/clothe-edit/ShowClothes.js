import '../clientsContent/clients-content.css';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class ShowClothes extends Component {
  render(){
    return(
      <div className='content'>
      <ul className='Clothes-Items'>
        {
          this.props.state.clothes.map((e,idx) => {
            return <Link to={`/edit/${e._id}`} key={idx}><li className='ImgandLabel'>
              <img className="imageh2" src={e.imageUrl} alt='uhjns'/>
              <label>{e.name}</label>
              </li></Link>
        })}
      </ul>
      </div>
    )
  }
}
export default ShowClothes;