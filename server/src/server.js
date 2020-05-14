// Create express app
const express = require("express")
const cors = require('cors')
const csv = require('csvtojson')
const app = express()
app.use(cors())

const whiteCards = []
const blackCards = []
const blackCardsFile = 'server/src/misc/black_cards.csv'
const whiteCardsFile = 'server/src/misc/white_cards.csv'

csv()
	.fromFile(blackCardsFile)
	.then((jsonObj) => {
		blackCards.push(jsonObj)
	})

csv()
	.fromFile(whiteCardsFile)
	.then((jsonObj) => {
		whiteCards.push(jsonObj)
	})

// Server port
var HTTP_PORT = 8000
// Start server
app.listen(HTTP_PORT, () => {
	console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

// Root endpoint
app.get("/", (req, res, next) => {
	res.
		res.json({ "message": "Ok" })
});

// Insert here other API endpoints

app.get('/listBlackCards', (req, res) => {
	return res.json({ "cards": blackCards });
});

app.get('/listWhiteCards', (req, res) => {
	return res.json({ "cards": whiteCards });
});

// Default response for any other request
app.use(function (req, res) {
	res.status(404);
});
