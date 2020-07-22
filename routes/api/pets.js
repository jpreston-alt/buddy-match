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

router.get("/api/searchDogs", (req, res) => {
    let location, breed, age;
    if (req.query.location) {
        location = `&location=${req.query.location}`
    } else {
        location = ""
    }

    if (req.query.breed) {
        breed = `&breed=${req.query.breed}`
    } else {
        breed = ""
    }

    if (req.query.age) {
        age = `&age=${req.query.age}`
    } else {
        age = ""
    }

    let query = `${location}${breed}${age}`;

    axios({
        method: "GET",
        url: `https://api.petfinder.com/v2/animals?type=dog&limit=100${query}`,
        headers: {
            "Authorization": `Bearer ${req.query.token}`
        }
    })
        .then(data => res.send(data.data))
        .catch(err => console.log(err));
});



module.exports = router;