import axios from "axios";

export default {
    getAll: function () {
        return axios.get("/api/favorites");
    },

    addOne: function (newPet) {
        return axios.post("/api/favorites", newPet);
    },

    deleteOne: function (id) {
        console.log(id);
        return axios.delete("/api/favorites/" + id);
    },
};