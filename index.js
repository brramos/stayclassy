const express = require('express')
const path = require('path')
const open = require('open')

const app = express()

const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './src/index.html'))
})

app.listen(PORT, (err) => {
	if (err) {
		console.log(err)
	} else {
		// open('http://127.0.0.1:' + PORT)
	}
})
