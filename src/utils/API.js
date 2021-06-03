import axios from "axios";

let API = {
    getRandomEmployees: function() {
        return axios.get("https://randomuser.me/api/?results=100&seed=banana");
    }
};

export default API;