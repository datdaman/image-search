import axios from 'axios';

export default axios.create({
  baseURL:'https://api.unsplash.com',
  headers:{
    Authorization: 'Client-ID 4d4be219c3ba3b59337a32b622a76824c01f79bfa6fed35e98792fb837604ff5',
  }
})
