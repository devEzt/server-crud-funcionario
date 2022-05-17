const express = require('express')
const router = express.Router()
const funcionarios = require('../models/funcionarioSchema')

// router.get('/', (req, res) => {
//   console.log('conectado')
// })

//registrar novo funcionario
router.post('/add-funcionario', async (req, res) => {
  // console.log(req.body)
  const { nome, sobrenome, email, nnis } = req.body

  if (!nome || !sobrenome || !email || !nnis) {
    res.status(422).json('Por favor preencha os campos')
  }
  try {
    const prefuncionario = await funcionarios.findOne({ email: email })
    console.log(prefuncionario)

    if (prefuncionario) {
      res.status(404).json('Este funcionário já foi adicionado previamente.')
    } else {
      const addFuncionario = new funcionarios({
        nome,
        sobrenome,
        email,
        nnis,
      })
      await addFuncionario.save()
      res.status(201).json(addFuncionario)
      console.log(addFuncionario)
    }
  } catch (error) {
    res.status(404).json(error)
  }
})

//get funcionario
router.get('/get-funcionarios', async (req, res) => {
  try {
    const funcionarioData = await funcionarios.find()
    res.status(201).json(funcionarioData)
    console.log(funcionarioData)
  } catch (err) {
    res.status(422).json(err)
  }
})

//get apenas um funcionario
router.get('/get-funcionario/:id', async (req, res) => {
  try {
    console.log(req.params)
    const { id } = req.params

    const funcionarioData = await funcionarios.findById({ _id: id })

    console.log(funcionarioData)
    res.status(201).json(funcionarioData)
  } catch (err) {
    res.status(404).json(funcionarioData)
  }
})

//edit dados de funcionario
router.patch('/edit-funcionario/:id', async (req, res) => {
  try {
    const { id } = req.params

    const editFuncionario = await funcionarios.findByIdAndUpdate(id, req.body, {
      new: true,
    })
    console.log(editFuncionario)

    res.status(201).json(editFuncionario)
  } catch (err) {
    res.status(422).json(err)
  }
})

module.exports = router
