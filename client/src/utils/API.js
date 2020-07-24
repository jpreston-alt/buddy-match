import axios from "axios";

export default {
    getOrganizations: function (token) {
        return axios.get("/api/findAllOrgs", {
            params: {
                token: token
            }
        });
    },

    getOrgsByLocation: function (token, zip) {
        return axios.get("/api/findOrgs/", {
            params: {
                token: token,
                location: zip
            }
        });
    },

    getAll: function (token) {
        return axios.get("/api/findAllPets", {
            params: {
                token: token
            }
        });
    },

    searchDogs: function (token, location, breed, age) {
        return axios.get("/api/searchDogs", {
            params: {
                token: token,
                location: location,
                breed: breed,
                age: age
            }
        });
    },

    getBreeds: function (token) {
        return axios.get("/api/getBreeds", {
            params: {
                token: token,
            }
        });
    },

    getDog: function (token, id) {
        return axios.get(`/api/getDog`, {
            params: {
                token: token,
                id: id
            }
        });
    },
};