const router = require('express').Router();
const path = require('path');

// creates a route for the homepage/main index.html page.
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});
// creates route for the excercise.html page
router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
// creates a route for the stats.html page. 
router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
});

module.exports = router;