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
    numOfBuddies: {
        type: Number,
        required: true
    },
    lovePeople: {
        type: Boolean,
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
    place:{
        type: String,
        required: true
    },
    FoodRestrictions:{
        type: String,
        required: false
    },
    PetFriendly:{
        type: String,
        required: false
    },
    time:{
        type: String,
        required: false
    },
    subject:{
        type: String,
        required: true
    },
    DiverseSubject:{
        type: String,
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;