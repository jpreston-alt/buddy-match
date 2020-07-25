import axios from "axios";
const key = process.env.REACT_APP_PET_FINDER_API_KEY;
const secret = process.env.REACT_APP_PET_FINDER_API_SECRET;

// export default {
//     getToken: function () {
//         return axios.get("/api/getToken");
//     }
// };

export default {
    getToken: function () {
        return fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then(function (resp) {

                // Return the response as JSON
                return resp.json();

            })
    }
};