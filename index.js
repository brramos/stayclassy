const express = require('express')
const path = require('path')
const open = require('open')

const app = express()

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(8000, (err) => {
	if (err) {
		console.log(err)
	} else {
		open('http://localhost:' + port)
	}
})
