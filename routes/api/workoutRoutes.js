const router = require('express').Router();
const db = require("../../models");

// To Do/PseudoCode 
// 1. create a get to get all workout data
router.get("/", async (req, res) => {
    try {
        const dbWorkout = await db.Workout.find({});
        res.json(dbWorkout);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


// 2. create a new workout
router.post("/", async ({ body }, res) => {
    try {
        const dbNewWorkout = await db.Workout.create(body);
        res.json(dbNewWorkout);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// 3. Get duration of data over 7 days 
router.get("/range", async (req, res) => {
    try {
        const dbWorkout = await db.Workout.find({});
        res.json(dbWorkout);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// 4. Update a workout. 
router.put("/:id", async (req, res) => {
    try {
        const updatedbWorkout = await db.Workout.findByIdAndUpdate(
            req.params.id,
            {
                $push: { exercises: req.body },
            },
            {
                new: true,
                runValidators: true,
            }
        );
        res.json(updatedbWorkout);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;