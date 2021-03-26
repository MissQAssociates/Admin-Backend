const express = require('express');
const routes = express.Router();
const artisan = require('../controller/artisans-controller');
const artisanCompletedJobs = require('../controller/jobs-done');
const customers = require('../controller/customers-controller')


routes.get('/getUserAndCredit', artisan.findUserAndCredits);

routes.post('/getCertainUsersCredits', artisan.getCertainUserCredits);

routes.get('/get-all-completed-jobs', artisanCompletedJobs.returnCompletedJobs)

// This route is to get all the customers
routes.get('/get-all-customers', customers.returnAllCustomers)

// This route is to get the data of a specific artisan
routes.post('/get-artisan', artisanCompletedJobs.returnArtisan)


//This route is when a certain user is new with this application and default is the user have no credits, so add credits
routes.post('/addCredits',  artisan.addCredits);

// This route is to deduct a certain users credits
routes.post('/deduct-credits', artisan.deductCredits)

//This action is depend on the admin if he will block the certain user, to suspend or to activate
routes.post('/edit-certain-user-situation',  artisan.editCertainUserSituation)

routes.post('/booking', artisanCompletedJobs.returnBookings)

module.exports = routes;