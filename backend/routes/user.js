// Import Express module 
const express = require('express');
// Import Router
const router = express.Router();
// Import User Module
const User = require('../models/user')
// cryptage password
const bcrypt = require('bcrypt');
    // Add use to DB
router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, 10).then(
        hash => {
            console.log("Hash", hash);


    const user = new User({

        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hash

    });


    user.save()
        .then(
            result => {
                
                res.status(200).json({
                    message: "User added successfully"                })
            }
        ).catch(
            err => {
                console.log('error',err);

                res.status(500).json({
                    error: err
                })
            })
});
});

//Login
router.post('/signin', (req, res) => {

});

module.exports = router;