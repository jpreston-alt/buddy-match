const router = require("express").Router();
const petController = require("../../controllers/petController");

// Matches with "/api/books"
router.route("/api/favorites")
    .get(petController.findAll)
    .post(petController.create);

// Matches with "/api/books/:id"
router
    .route("/api/favorites/:id")
    .get(petController.findById)
    .delete(petController.remove);

module.exports = router;
