import axios from "axios";

export default {
    getToken: function () {
        return axios.get("/api/getToken");
    }
};