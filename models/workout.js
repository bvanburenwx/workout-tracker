const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: { type: Date, default: Date.now},
        exercises: [
            {
                type: {
                    type: String,
                },
                name: {
                    type: String,
                },
                duration: {
                    type: Number,
                }, 
                reps: {
                    type: Number,
                },
                weight: {
                    type: Number,
                },
                distance: {
                    type: Number,
                 }, 
                sets: {
                    type: Number, 
                }, 
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        }, 
    }
    );
    WorkoutSchema.virtual("totalDuration").get(function () {
        const duration = this.exercises.reduce((acc, current) => {
            return acc + current.duration; 
        }, 0);

        return duration;
    });

    const Workout = mongoose.model('workout', WorkoutSchema);

    module.exports = Workout;