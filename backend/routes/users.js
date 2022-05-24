const router = require('express').Router();
const User = require('../models/user');

router.route('/').get((req, res) => {
    User.find()     //list of all users in User model
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.name;
    const mail = req.body.email;
    const phone = req.body.phone;
    const numOfBuddies = req.body.numOfBuddies;
    const lovePeople = req.body.lovePeople;
    const language = req.body.language;
    const gender = req.body.gender;
    const place = req.body.place;
    const FoodRestrictions = req.body.FoodRestrictions;
    const PetFriendly = req.body.PetFriendly;
    const time = req.body.time;
    const subject = req.body.subject;
    const DiverseSubject = req.body.DiverseSubject;
    const newUser = new User({
        username,
        mail,
        phone,
        numOfBuddies,
        lovePeople,
        language,
        gender,
        place,
        FoodRestrictions,
        PetFriendly,
        time,
        subject,
        DiverseSubject
    });

    newUser.save()
        .then(() => res.json(newUser._id))
});

module.exports = router;