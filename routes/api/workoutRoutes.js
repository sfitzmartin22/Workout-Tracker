const router = require('express').Router();
const Workout = require("../../models/workout.js");

router.get("/", (req, res) => {
    Workout.find({})
    .then(dbWorkout => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// router.post
router.post("/", ({ body }, res) => {
    Workout.create(body)
    .then(dbWorkout => {
        res.json(dbWorkout);
        console.log(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
});

// router.put


module.exports = router;
