const express = require('express')
, session = require('express-session')
, bodyParser = require('body-parser')
, routes = require('./rotas.js')
, app = express()

app.use(session(
	{
		secret: 'smuumorango',
		saveUninitialized: true,
		resave: true
	}
))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(routes)

const listener = app.listen(8000, () => {
	console.log('Ok ' + listener.address().port)
})