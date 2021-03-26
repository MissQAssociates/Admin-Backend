const artisanCompletedJobs = require('../models/artisan-completed-task');
const artisansSchema = require('../models/artisans-schema');
const bookings = require('../models/bookings-model')

exports.returnCompletedJobs = (req, res) => {
    artisanCompletedJobs.find({state: "completed"}, (err, result) => {
        res.send(result)
    })
}


exports.returnArtisan = (req, res) => {
    artisansSchema.find({_id: req.body.artisan}, (err, result) => {
        res.send(result[0])
    })
}

exports.returnBookings = (req, res) => {
    bookings.find({_id: req.body._id}, (err, result) => {
        res.send(result)
    })
}

// [{"_id":"601b6855b793d92338d43a18","currentUser":"601a6b550973ac136047a0d4","state":"completed","customerId":"5fc85bc8dd25b02e80bc2172","__v":0},
// {"_id":"601b6b7a3d762e1e68287916","currentUser":"601b6b4f3d762e1e68287915","state":"completed","customerId":"5fc8612147beb23830c3f30c","__v":0},
// {"_id":"601cb96e00aa0626d0d27e2c","currentUser":"601cb93e00aa0626d0d27e2b","state":"completed","customerId":"5fc8619947beb23830c3f30d","__v":0},
// {"_id":"601ccb447a2f252788939879","currentUser":"601cca9d7a2f252788939878","state":"completed","customerId":"5fc873c807371131e8647afb","__v":0},
// {"_id":"603d9db2895af3222212c80b","currentUser":"603d9d5f895af3222212c808","state":"completed","customerId":"5fc8911fc81a1e241c9c6adb","__v":0},
// {"_id":"604977d307a35026bf130024","currentUser":"6045d12407a35026bf130004","state":"completed","customerId":"60068087ae3e520e1c8a6b77","__v":0},
// {"_id":"60497b8e07a35026bf130027","currentUser":"6045d12407a35026bf130004","state":"completed","customerId":"6021fda710712149b88dbe34","__v":0},
// {"_id":"604f4254d946e80a4604e58c","currentUser":"604f24f4d946e80a4604e58a","state":"completed","customerId":"6023528310712149b88dbe40","__v":0},
// {"_id":"60548f317bba9f42e518be00","currentUser":"60422c690342571162f65115","state":"completed","customerId":"5fc8911fc81a1e241c9c6adb","__v":0}]