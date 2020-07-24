import axios from "axios";

export default {
    getToken: function () {
        console.log("getting token...");
        return axios.get("/api/getToken");
    }
};