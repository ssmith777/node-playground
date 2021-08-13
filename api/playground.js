
const express = require('express')
const morgan = require('morgan')
const app = express()

const getDate = () =>
	new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')

app.use(morgan('default'))

app.use((req, res, next) => {
	console.log(getDate())
	next()
})

app.get('/', (req, res) => {
	res.send('Successful response.')
})

app.listen(3000, () => console.log('Example app is listening on port 3000.'))



/**
 *  Note: You will need to switch out commands in package.json to use API with nodemon
 * 	"pg-api": "nodemon ../../api/app.js --quiet"
 */
