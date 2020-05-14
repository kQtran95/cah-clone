const csv = require('csvtojson')

const loadCSV = {
	loadBlackCards() {
		const blackCardsFile = 'server/src/misc/black_cards.csv'
		const blackCards = []
		csv()
			.fromFile(blackCardsFile)
			.then((jsonObj) => {
				blackCards.push(jsonObj)
				console.log(jsonObj)
			})
		console.log("CARDS " + blackCards)
		return blackCards
	},
	loadWhiteCards() {
		const whiteCardsFile = 'server/src/misc/white_cards.csv'
		const whiteCards = []
		csv()
			.fromFile(whiteCardsFile)
			.then((jsonObj) => {
				whiteCards.push(jsonObj)
			})
		return whiteCards
	}
}

module.exports = loadCSV