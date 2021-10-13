const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
    {
        day: { type: Date, default: () => new Date() },
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