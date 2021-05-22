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
router.put("/:id", (req, res) => {
    Workout.findOneAndUpdate({_id: req.params.id},
        {$push: {exercises: req.body}},
        {new:true})
        .then(dbWorkout => {
        res.json(dbWorkout);
        })
        .catch(err => {
        res.status(400).json(err);
    })
});

router.get("/range", (req, res) => {
    Workout.aggregate([
        {$addfields: {totalWeight: {$sum: "$exercises.weight"}, totalDuration: {$sum: "$exercises.duration"}}},
    ])
    .then(dbWorkout =>{
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;
