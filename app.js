require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('./db/conn')
const funcionarios = require('./models/funcionarioSchema')

const port = 8001

app.listen(port, () => {
  console.log(`server esta iniciando porta numero ${port}`)
})
