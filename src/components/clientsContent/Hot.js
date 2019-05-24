import './clients-content.css';
import React, {Component} from 'react';
import Modal from 'react-responsive-modal';
import ExibitClothe from './ExibitClothe';
import axios from 'axios';


class Newest
 extends Component {
  constructor(props){
    super(props)  
     this.state = {
       open: false,
       currentModal: null,
       likes: [],
  };
}

componentDidMount() {
  axios.get(`http://localhost:5000/api/users/likes`)
.then(response => {
 this.setState({
   likes: response.data,
 });
})
.catch((err) => {
 console.log(err);
});
}

orderClothesbyLikes(){
let countlikes = {};
  this.state.likes.forEach(element => {
    if (countlikes[element.clothe_id._id]) {
      countlikes[element.clothe_id._id] += 1
    } else {
      countlikes[element.clothe_id._id] = 1;
    }
  });
  return Object.entries(countlikes).sort((a,b)=> b[1]-a[1])
}


  onOpenModal = (idx) => {
    if (!this.state.open) {
      this.setState({ open: true, currentModal: idx });
    }
  };

  orderClothes() {
    return this.props.state.clothes.sort( (a,b) => {return b.created.localeCompare(a.created)});  
  }

  onCloseModal = () => {
    console.log('entrou')
    this.setState({ open: false, currentModal: null }, () => {
      console.log(this.state)
    });
  };

  topClothes=(arr)=>{
    const newarr=[]
    arr.filter((e) => this.props.state.clothes.find((element) => {
      if(element._id === e[0]){
        newarr.push(element)
      }
    }))
  return newarr
  }

  render(){
    const hot = this.orderClothesbyLikes().slice(0,3);
    const topObjects = this.topClothes(hot)
    console.log(hot)

    const { open } = this.state;
    return(
      <div>
        <h1>Queridinhas</h1>
        <ul className='Clothes-Items'>{
            topObjects.map((e , idx)=> {
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