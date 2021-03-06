import './clients-content.css';
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import ExibitClothe from './ExibitClothe';

class TypeFilter extends Component {
  constructor(props){
    super(props)  
     this.state = {
       open: false,
       currentModal: null
  };
  this.filterClothes = this.filterClothes.bind(this);
}

  onOpenModal = (idx) => {
    console.log(this.props)
    if (!this.state.open) {
      this.setState({ open: true, currentModal: idx });
    }
  };

  filterClothes(clotheType) {
    return this.props.state.clothes.filter((e) => e.type1 === clotheType);
  }

  onCloseModal = () => {
    this.setState({ open: false, currentModal: null }, () => {
    });
  };


  render(){
    const clothes = this.filterClothes(this.props.match.params.type);
    const { open } = this.state;
    return(
      <div className='content'>
        <ul className='Clothes-Items'>
          {
            clothes.map((e,idx) => {
              return <button className='btn-itms btn-type' onClick={() => this.onOpenModal(idx)} key={idx}><li className='ImgandLabel'>
                <img className="imageh2" src={e.imageUrl} alt='uhjns'/>
                <label>{e.name}</label>
                </li>
                <Modal open={open && idx === this.state.currentModal} onClose={this.onCloseModal} big>
                  <ExibitClothe clothe={e} user={this.props.state.loggedInUser}/>
                </Modal>
                </button>
              })}
        </ul>
      </div>
    )
  }
}
export default TypeFilter;

