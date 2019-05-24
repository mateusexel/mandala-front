import './clients-content.css';
import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import ExibitClothe from './ExibitClothe';

class Newest
 extends Component {
  constructor(props){
    super(props)  
     this.state = {
       open: false,
       currentModal: null
      };
  }

  onOpenModal = (idx) => {
    if (!this.state.open) {
      this.setState({ open: true, currentModal: idx });
    }
  };

  orderClothes() {
    console.log(this.props.state.clothes[0].name)
    return this.props.state.clothes.sort( (a,b) => {return b.created.localeCompare(a.created)});  
  }

  onCloseModal = () => {
    console.log('entrou')
    this.setState({ open: false, currentModal: null }, () => {
      console.log(this.state)
    });
  };

  render(){
    const clothes = this.orderClothes().slice(0,3);
    const { open } = this.state;
    return(
      <div>
        <h1>Novidade</h1>
        <ul className='Clothes-Items'>{
            clothes.map((e , idx)=> {
              return <button className='btn-itms' onClick={() => this.onOpenModal(idx)} key={idx}><li className='ImgandLabel'>
                <img className="imageh2" src={e.imageUrl} alt='uhjns'/>
                <label>{e.name}</label>
                </li>
                <Modal open={open && idx === this.state.currentModal} onClose={this.onCloseModal} big>
                  <ExibitClothe clothe={e} user={this.props.state.loggedInUser}/>
                </Modal>
                </button>
              })
            }
        </ul>
      </div>
    )
  }
}
export default Newest
;

