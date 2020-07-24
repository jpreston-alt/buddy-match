import axios from "axios";

export default {
    getToken: function (key, secret) {
        console.log("getting token...");
        return axios.get("/api/getToken", {
            params: {
                key: key,
                secret: secret
            }
        })
    }
};