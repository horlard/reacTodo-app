import axios from 'axios'
const hostname = window && window.location && window.location.hostname;
console.log(hostname);
  let baseURL = 'https://cors-anywhere.herokuapp.com/https://react-todo-db.herokuapp.com';


export default axios.create({
    baseURL
})
