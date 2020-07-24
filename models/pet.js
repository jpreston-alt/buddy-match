const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name: { type: String },
    photo: { type: String },
    age: { type: String },
    email: { type: String },
    phone: { type: String },
    gender: { type: String },
    status: { type: String },
    breed: { type: String },
    location: { type: String },
    href: { type: String },
    status: String,
    id: String,
    date: { type: Date, default: Date.now }
});

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;