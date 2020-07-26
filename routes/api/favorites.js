const router = require("express").Router();
const petController = require("../../controllers/petController");

router.route("/api/favorites")
    .get(petController.findAll)
    .post(petController.create);

router
    .route("/api/favorites/:id")
    .get(petController.findById)
    .delete(petController.remove);

module.exports = router;
