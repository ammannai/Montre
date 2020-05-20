//import Express module
const express = require("express");
//Create express app
const app = express();
//Import montre model
const Montre = require('./models/montre');
//Import model montre
const User = require('./models/user');
//import bodyParser
const bodyParser = require("body-parser");
//Connect db with mongoose
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
mongoose.connect('mongodb://localhost:27017/montreDB', { useNewUrlParser: true, useUnifiedTopology: true });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, Accept, Content-Type, X-Requested-with");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS, PATCH, PUT");
    next();
});

app.use('/api/user',userRoutes);
app.get('/', (req, res) => {
    console.log("Hello from app");
    //Insertion du montre
    const m = new Montre({
        price: 15,
        name: "Festina",
        marque: "Festina",
        description: "azerty"
    })
    console.log("This is my object", m);
    m.save();
});
//Insertion d'un user
app.get('/user', (req, res) => {
    const u = new User({
        firstName: "Amine 2",
        lastName: "Mannai 2",
        email: "aminemannai.essect@gmail.com",
        password: "123",
        confirmPassword: "123"
    })
    console.log("This is my user object values", u);
    u.save();
})
app.post('/api/montres', (req, res) => {
    const m = new Montre({
        price: req.body.price,
        name: req.body.name,
        marque: req.body.marque,
        description: req.body.description

    });
    console.log(m);

    m.save();
    // Sending request to FE 
    res.status(201).json({
        message: "watch added successfully"  })
    })
    // get all watches 
//url : http://localhost:3000/api/allWatches

app.get('/api/allwatches', (req, res) => {

    Montre.find((err, documents) => {

        //status 200 = OK
        res.status(200).json({
            message: "List of watches",
            watches: documents
        })

    });
    
})
//Get Watch ByID
//URL : http://localhost:3000/api/watches/:id

app.get('/api/watches/:id', (req, res) => {
    Watch.find({ _id: req.params.id }).then(
        watch => {
            if (watch) {
                res.status(200).json(watch);

            } else {
                console.log("Watch not Found");
                res.status(404).json({
                    message: "404 Not Found"
                })
            }
        }
    )
});

//delete Watch ByID
//URL : http://localhost:3000/api/watches/:id

app.delete('/api/watches/:id', (req, res) => {
    Watch.deleteOne({ _id: req.params.id }).then(
        data => {
            console.log("deleted", data);

        }
    )
    res.status(200).json({
        message: "Deleted Successfully "
    });
});

//update Watch ByID
//URL : http://localhost:3000/api/watches/:id

app.put('/api/watches/:id', (req, res) => {

    console.log("req Body", req.body);

    const watch = new Watch({
        _id: req.body._id,
        price: req.body.price,
        marque: req.body.marque,
        image: req.body.image,
        description: req.body.description
    });
    Watch.updateOne({ _id: req.body._id }, watch).then(
        data => {
            if (data) {
                res.status(200).json({
                    message: "Updates successfully"
                })
            } else {
                console.log("Error Update");

            }
        }
    )
})

module.exports = app;