// Import Express module 
const express = require('express');
// Import Router
const router = express.Router();
// Import User Module
const User = require('../models/user')
// cryptage password
const bcrypt = require('bcrypt');
// JWT plugin
const jwt = require('jsonwebtoken');
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
    let getedUser;
    User.findOne({ email: req.body.email }).then(
            user => {
                if (!user) {
                    return res.status(401).json({
                        message: 'Email invalid'
                    })
                }
                getedUser = user;
                console.log("getted user", getedUser);

                return bcrypt.compare(req.body.password, getedUser.password);
            })
        .then(result => {
            if (!result) {
                return res.status(401).json({
                    message: 'Password invalid'
                })
            }
            //Email and password are valid
            //Generate Token
            const token = jwt.sign({ email: getedUser.email, userId: getedUser._id }, 'secret_key', { expiresIn: '1h' });
            console.log('this token', token);

            res.status(200).json({
                message: "success Authentification",
                token: token
            })
        })
        .catch(err => {

        })
});

module.exports = router;