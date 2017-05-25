const express = require('express')
const app = express()
const bodyparser = require('body-parser')
const path = require('path')
const db = require('./models')
const routes = require('./routes')

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json())
app.use(express.static(__dirname))

app.use('/api', routes)

app.get('/*',(req, res)=>{
  res.sendFile(path.join(__dirname, '/client/index.html'))
})

db.sequelize.sync().then(function() {
	app.listen(process.env.PORT || 3000, () =>
		console.log('Listening on port 3000')
	);
})
