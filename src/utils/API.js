import axios from "axios";

export default {
    getAll: function () {
        return axios({
            method: "GET",
            url: "https://api.petfinder.com/v2/animals?type=dog&page=2",

        })
    }
};