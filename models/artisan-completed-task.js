var mongoose = require('mongoose')

const taskOfUsers = new mongoose.Schema({
    currentUser: {
        type: String,
        required: true,
    },
    state: {
        type: Object,
        required: true
    },
    customerId: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('taskofusers', taskOfUsers);