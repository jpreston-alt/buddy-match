import axios from "axios";
require("dotenv");

const key = process.env.REACT_APP_API_KEY;
const secret = process.env.REACT_APP_API_SECRET;


export default {
    getToken: function () {
        return axios({
            method: "POST",
            url: "https://api.petfinder.com/v2/oauth2/token",
            data: `grant_type=client_credentials&client_id=${key}&client_secret=${secret}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
    },

};