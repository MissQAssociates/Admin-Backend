const customers = require('../models/customer-model')

exports.returnAllCustomers  = (req, res) => {
    customers.find({}, (err, result) => {
        res.send(result)
    })
}