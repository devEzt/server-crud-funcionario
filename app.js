require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('./db/conn')

const funcionarios = require('./models/funcionarioSchema')
const cors = require('cors')
const router = require('./routes/router')

const port = 8001

app.use(cors())
app.use(express.json())

app.use(router)

app.listen(process.env.PORT || port)
