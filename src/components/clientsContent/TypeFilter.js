import './clients-content.css';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class TypeFilter extends Component {
    filterClothes(clotheType) {
    return this.props.state.clothes.filter((e) => e.type1 === clotheType);
  }

  render(){
    const clothes = this.filterClothes(this.props.match.params.type);
    return(
      <ul className='Clothes-Items'>
        {
          clothes.map((e,idx) => {
            return <Link to={`/edit/${e._id}`} key={idx}><li className='ImgandLabel'>
              <img src={e.imageUrl} alt='uhjns'/>
              <label>{e.name}</label>
              </li></Link>
        })}
      </ul>
    )
  }
}
export default TypeFilter;



  // filterClothes(clotheType) {
  //   return this.state.clothes.filter();
  // }
    // const clothes = this.filterClothes(this.props.match.params.type);
    // console.log(clothes);