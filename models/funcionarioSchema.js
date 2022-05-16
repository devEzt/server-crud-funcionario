const mongoose = require('mongoose')

const funcionarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nnis: {
    type: Number,
    required: true,
  },
})

const funcionarios = new mongoose.model('funcionarios', funcionarioSchema)

module.exports = funcionarios
