import axios from 'axios'
let baseURL = 'http://localhost:3002';
const hostname = window && window.location && window.location.hostname;
console.log(hostname);
if(hostname === 'https://react-todo-mgt.netlify.com/') {
  baseURL = 'https://react-todo-db.herokuapp.com';
}


export default axios.create({
    baseURL
})