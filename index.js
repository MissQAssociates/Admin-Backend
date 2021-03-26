const express = require('express');
const port = process.env.PORT || 8080;
const ObjectId = require('mongodb').ObjectID;
const mongoose = require("mongoose")
const uri = "mongodb://msqassociates:sunz8lyoztRAkVIw@cluster0-shard-00-00.uc6o6.mongodb.net:27017,cluster0-shard-00-01.uc6o6.mongodb.net:27017,cluster0-shard-00-02.uc6o6.mongodb.net:27017/MsQAssociates?ssl=true&replicaSet=atlas-7q3496-shard-0&authSource=admin&retryWrites=true&w=majority"
const app = express();
var usersArtisans = "";
var usersCustomer = "";
const cors = require("cors");
const ApiControllers = require('./routes/api')

const admin = {
    username: "Admin",
    password: "@dm1n"
}


app.use(cors());
app.use(express.json());

mongoose.connect(uri, (err, db) => {
    if (err) {
        throw err
    } else {
        console.log("Connected to Database Successfully!")
        usersArtisans = db.collection("artisans")
        usersCustomer = db.collection("customers")
    }
})

app.post('/login', (req, res) => {
    if (admin.username == req.body.username) {
        if (admin.password == req.body.password) {
            res.send(true)
        } else {
            res.send(false)
        }
    } else {
        res.send(false)
    }
})

app.get('/test', (req, res) => {
    usersArtisans.find({}).toArray((err, result) => {
        res.send(result)
    })
})


app.use('/api', ApiControllers);


app.post('/deleteUser', (req, res) => {
        usersArtisans.deleteOne({ _id: ObjectId(req.body.userID) }, (err, result) => {
            res.send(result)
        })
    })
    // retrieve customers
app.get('/customers', (req, res) => {
        usersCustomer.find({}).toArray((err, result) => {
            if (err) {
                res.send({ status: false, error: err })
            }
            res.send({ status: true, data: result });
        })
    })
    // find specific customer
app.get('/customer/:id', (req, res) => {
    usersCustomer.findOne({ _id: mongoose.Types.ObjectId(req.params.id) }, (err, result) => {
        if (err) {
            res.send({ status: false, error: err })
        }
        res.send({ status: true, data: result })
    })
})

// delete customer
app.post('/deleteCustomer/:id', (req, res) => {
    usersCustomer.deleteOne({ _id: ObjectId(req.params.id) }, (err, result) => {
        if (err) {
            res.send({ status: false, error: err })
        }
        res.send({ status: true, data: result })
    })
})



app.listen(port, () => { console.log("Listening to port " + port) })