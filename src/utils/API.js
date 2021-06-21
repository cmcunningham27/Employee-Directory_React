import axios from 'axios';

//collects employees' information from Random User API
export default {
    getEmployees: function() {
        return axios.get('https://randomuser.me/api/?results=50&nat=us&inc=picture,name,phone,email,dob')
    }
};