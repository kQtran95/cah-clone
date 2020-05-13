var sqlite3 = require('sqlite3').verbose()
var md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
	if (err) {
		// Cannot open database
		console.error(err.message)
		throw err
	} else {
		console.log('Connected to the SQLite database.')
		
		//Create table for black cards
		db.run(`CREATE TABLE black_cards (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            prompt text,
            special text,
            set text,
            sheet text
            )`,
			(err) => {
				if (err) {
					// Table already created
				} else {
					//TODO load from file
				}
			});
			
		//Create t able for white cards
		db.run(`CREATE TABLE white_cards (
				id INTEGER PRIMARY KEY AUTOINCREMENT,
				response text,
				set text,
				sheet text
				)`,
			(err) => {
				if (err) {
					// Table already created
				} else {
					//TODO load from file
				}
			});
	}
});


module.exports = db