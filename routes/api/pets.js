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

    req.query.location ? location = `&location=${req.query.location}` : location = "";
    req.query.breed ? location = breed = `&breed=${req.query.breed}` : breed = "";
    req.query.age ? location = age = `&age=${req.query.age}` : age = "";

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

router.get("/api/getBreeds", (req, res) => {
    axios({
        method: "GET",
        url: "https://api.petfinder.com/v2/types/dog/breeds",
        headers: {
            "Authorization": `Bearer ${req.query.token}`
        }
    })
        .then(data => res.send(data.data.breeds))
        .catch(err => console.log(err));
});

router.get("/api/getDog", (req, res) => {
    axios({
        method: "GET",
        url: `https://api.petfinder.com/v2/animals/${req.query.id}`,
        headers: {
            "Authorization": `Bearer ${req.query.token}`
        }
    })
        .then(data => res.send(data.data.animal))
        .catch(err => console.log(err));
});





module.exports = router;