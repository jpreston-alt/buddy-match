const router = require("express").Router();
const axios = require("axios");

router.get("/api/findAllPets", (req, res) => {
    axios({
        method: "GET",
        url: "https://api.petfinder.com/v2/animals?type=dog&page=2&limit=100",
        headers: {
            "Authorization": `Bearer ${req.query.token}`
        }
    })
        .then(data => res.send(data.data))
        .catch(err => console.log(err));
});

module.exports = router;