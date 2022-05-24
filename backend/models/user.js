const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    language:{
        type: String,
        required: false
    },
    gender:{
        type:String,
        required: false
    },
    numOfBuddies: {
        type: Number,
        required: true
    },
    lovePeople: {
        type: Boolean,
        required: true
    }


});

const User = mongoose.model('User', UserSchema);

module.exports = User;