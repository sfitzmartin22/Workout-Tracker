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
router.put("/:id", ({ body }, res) => {
    Workout.collection.updateOne(req.params.id,
        {$push: {excercies: req.body}},
        {new:true})
        .then(dbWorkout => {
            res.json(data);
    })
    .catch(err => {
        res.status(400).json(err);
    })
});

module.exports = router;
