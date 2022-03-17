const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
    }
})

// const User = mongoose.model("User", userScheme);

module.exports = mongoose.model('users', userSchema)