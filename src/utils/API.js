import axios from 'axios';

//collects specific employees' information from Random User API
const API = {
    getEmployees: function() {
        return axios.get('https://randomuser.me/api/?results=50&nat=us&inc=picture,name,phone,email,dob')
    }
};

export default API;