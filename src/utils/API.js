import axios from "axios";

export default {
    getOrganizations: function (token) {
        return axios({
            method: "GET",
            url: "https://api.petfinder.com/v2/organizations",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    },

    getAll: function (token) {
        return axios({
            method: "GET",
            url: "https://api.petfinder.com/v2/animals?type=dog&page=2&limit=100",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
    }
};