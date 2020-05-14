const express = require('express')
const router = express.Router()
const loadCSV = require('../misc/loadCSV')
const blackCards = loadCSV.loadBlackCards()
const whiteCards = loadCSV.loadWhiteCards()
router.get('/', (req, res) => {
  return res.send('Received a GET HTTP method');
});

// Root endpoint
router.get("/", (req, res, next) => {
	res.
		res.json({ "message": "Ok" })
});

// Insert here other API endpoints

router.get('/listBlackCards', (req, res) => {
	return res.json({ "cards": blackCards });
});

router.get('/listWhiteCards', (req, res) => {
	return res.json({ "cards": whiteCards });
});

router.post('/updateCards', (req, res) => {
	
})

// Default response for any other request
router.use(function (req, res) {
	res.status(404);
});

module.exports = router