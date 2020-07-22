import axios from "axios";

export default {
    getOrganizations: function (token) {
        return axios.get("/api/findAllOrgs", {
            params: {
                token: token
            }
        });
    },

    getAll: function (token) {
        return axios.get("/api/findAllPets", {
            params: {
                token: token
            }
        });
    }
};