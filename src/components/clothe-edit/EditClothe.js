import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import service from '../api/service';
import axios from 'axios';

class EditClothe extends Component {
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          type1: "",
          type2: "",
          brand: "",
          price: "",
          fabric: "",
          imageUrl: "",
          redirect: false,
        };
    }
    componentDidMount() {
        axios.get(`http://localhost:5000/api/clothes/${this.props.match.params.id}`)
				.then( responseFromApi =>{
          const theClothe = responseFromApi.data;
          this.setState(theClothe);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    handleChange = e => {  
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleFileUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);

        const uploadData = new FormData();
        uploadData.append("imageUrl", e.target.files[0]);
        
        service.handleUpload(uploadData)
        .then(response => {
            this.setState({ imageUrl: response.secure_url });
          })
          .catch(err => {
            console.log("Error while uploading the file: ", err);
          });
    }

    handleSubmit = e => {
			e.preventDefault();
			service.editClothe(this.state, this.props.match.params.id)
			.then(res => {
				this.setState({
					redirect: !this.state.redirect,
				}, () => {
					this.props.updateClothes();
				})
			})
			.catch(err => {
					console.log("Error while adding the clothe: ", err);
			});
		} 
		
    HandleDelete = e => {
			service.deleteClothe(this.props.match.params.id)
			.then(res => {
				this.setState({
					redirect: !this.state.redirect,
				}, () => {
					this.props.updateClothes();
				})
			})        
    }
    
    render() {
				if (this.state.redirect) {
					return <Redirect to="/showclothes" />
				} else {
					return (
						<div>
							<h2>New Clothe</h2>
							<form onSubmit={e => this.handleSubmit(e)}>
									<label>Name</label>
									<input 
											type="text"
											name="name"
											value={ this.state.name } 
											onChange={ e => this.handleChange(e)} />
									<label>Type1</label>
									<input 
											type="text"
											name="type1" 
											value={ this.state.type1 } 
											onChange={ e => this.handleChange(e)} />
									<label>Type2</label>
									<input 
											type="text"
											name="type2" 
											value={ this.state.type2 } 
											onChange={ e => this.handleChange(e)} />
									<label>Brand</label>
									<input 
											type="text"
											name="brand" 
											value={ this.state.brand } 
											onChange={ e => this.handleChange(e)} />
									<label>Price</label>
									<input 
											type="number" 
											name="price" 
											value={ this.state.price } 
											onChange={ e => this.handleChange(e)} />
									<label>Fabric</label>
									<input 
											type="text"
											name="fabric" 
											value={ this.state.fabric } 
											onChange={ e => this.handleChange(e)} />
									<input 
											type="file" 
											placeholder="image.jpg"
											onChange={(e) => this.handleFileUpload(e)} /> 
									<button type="submit">Edit Clothe</button>
							</form>
							<button onClick={e => this.HandleDelete(e)}>Delete</button>
						</div>
					);
				}
    }
}

export default EditClothe;
