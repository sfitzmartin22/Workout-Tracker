const router = require('express').Router();
const workout = require("./workoutRoutes");

router.use('/workout', workoutRoutes);

module.exports = router