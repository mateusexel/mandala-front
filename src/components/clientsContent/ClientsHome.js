
import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Newest from './Newest'
import Hot from './Hot'

class ClientsHome extends Component {
  render(){
    return(
      <div className='content'>
        <Newest state={this.props.state} />
        <Hot state={this.props.state}/>
        </div>
    )
  }
}
export default ClientsHome;