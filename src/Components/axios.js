import axios from 'axios';


 const urlInstance = axios.create({
     baseURL:"https://api.themoviedb.org/3"
 })

 export default urlInstance;