const router = require("express").Router();
const axios = require("axios");
require("dotenv").config();
const key = process.env.PET_FINDER_API_KEY;
const secret = process.env.PET_FINDER_API_SECRET;


router.get("/api/getToken", (req, res) => {
    axios({
        method: "POST",
        url: "https://api.petfinder.com/v2/oauth2/token",
        data: "grant_type=client_credentials&client_id=" + key + "&client_secret=" + secret,
        headers: {
            'Content-Type': 'application/problem+json'
        }
    })
        .then(response => res.json(response.data))
        .catch(err => console.log(err));
});

module.exports = router;