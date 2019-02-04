require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./config/routes')

const app = express()


mongoose.connect('mongodb://localhost/cats-db')

app.use(bodyParser.json())

app.use('/api', routes)

app.use(express.static(`${__dirname}/dist`))
app.get('/*', (req, res) => res.sendFile(`${__dirname}/dist/index.html`))



app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))
