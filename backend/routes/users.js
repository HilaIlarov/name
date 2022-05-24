const router = require('express').Router();
const User = require('../models/user');

router.route('/').get((req, res) => {
    User.find()     //list of all users in User model
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/match').get(async (req, res) => {
    const {ObjectId} = require('mongodb')
    const userId = req.query.userId;
    try {
        const user = (await User.find({_id: ObjectId(userId)}))[0]
        const matchData = await match(user)
        res.status(200).json(matchData)
    }
    catch (err){
        res.status(400).json('Error: ' + err)
    }
});

router.route('/add').post(async (req, res) => {
    const username = req.body.name;
    const mail = req.body.email;
    const phone = req.body.phone;
    const language = req.body.language;
    const gender = req.body.gender;
    const place = req.body.place;
    const numOfBuddies = req.body.numOfBuddies;
    const lovePeople = req.body.lovePeople;
    const time = req.body.time;
    const FoodRestrictions = req.body.FoodRestrictions;
    const PetFriendly = req.body.PetFriendly;
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
    
    await newUser.save();
    res.status(200).json(newUser._id)
});

async function match(cur_user) {
    const users = await User.find()
    if (cur_user["numOfBuddies"] === 0){
        return null
    }
    else{
        for (let i=0; i < users.length; i++){
            if(!(cur_user["_id"].equals(users[i]["_id"])) && users[i]["place"] === cur_user["place"] && users[i]["lovePeople"] === cur_user["lovePeople"]){
                if(cur_user["DiverseSubject"] === "true"){
                    if(users[i]["subject"] === cur_user["subject"] ){
                        return users[i]
                    }
                }
                else {
                    return users[i]
                }
            }
        }
    }
    return null
}

module.exports = router;