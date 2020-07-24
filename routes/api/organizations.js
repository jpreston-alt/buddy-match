const router = require("express").Router();
const axios = require("axios");

router.get("/api/findAllOrgs", (req, res) => {
    axios({
        method: "GET",
        url: "https://api.petfinder.com/v2/organizations",
        headers: {
            "Authorization": `Bearer ${req.query.token}`
        }
    })
        .then(data => res.send(data.data))
        .catch(err => console.log(err));
});

router.get("/api/findOrgs", (req, res) => {

    axios({
        method: "GET",
        url: `https://api.petfinder.com/v2/organizations?location=${req.query.location}&limit=20`,
        headers: {
            "Authorization": `Bearer ${req.query.token}`
        }
    })
        .then(data => res.send(data.data))
        .catch(err => console.log(err));
});

module.exports = router;