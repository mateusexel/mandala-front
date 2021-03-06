import axios from 'axios';

const service = axios.create({
  baseURL: 'http://localhost:5000/api/clothes',
  // withCredentials: true // => you might need this when having the users in the app 
});

const errorHandler = err => {
  console.error(err);
  throw err;
};

export default {
  service,

  handleUpload (theFile) {
    return service.post('/image/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },

  saveNewClothe (newClothe) {
    return service.post('/create', newClothe)
      .then(res => res.data)
      .catch(errorHandler);
  },

  editClothe (editedClothe, id) {
    return service.put(`/${id}`, editedClothe)
      .then(res => res.data)
      .catch(errorHandler);
  },

  deleteClothe(id){
    console.log('entrou no delet')
    return service.delete(`/${id}`)
      .then(res => console.log(res))
      .catch(errorHandler);
  },

  addLike(like){
    console.log('chamou', like)
    return service.post('/like', like)
      .then(res => {
        console.log(res.data)
      })
      .catch(errorHandler);
    
  }

}