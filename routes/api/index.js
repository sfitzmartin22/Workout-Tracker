const router = require('express').Router();
const Workout = require("./workoutRoutes");



router.use('/workouts', Workout);


module.exports = router;