const router = require('express').Router();
const Workout = require("../../models/workout.js");

router.get("/api/workout", ({ body }, res) => {
    Workout.find({})
    .sort({ day })
    .then(dbWorkorkout => {
        res.json(dbWorkorkout);
    })
    .catch(err => {
        res.status.apply(400).json(err);
    });
});

// router.post

// router.put


module.exports = router;