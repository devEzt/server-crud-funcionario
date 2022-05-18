const express = require('express')
const router = express.Router()
const funcionarios = require('../models/funcionarioSchema')

router.post('/add-funcionario', async (req, res) => {
  const { nome, sobrenome, email, nnis } = req.body

  if (!nome || !sobrenome || !email || !nnis) {
    res.status(422).json('Por favor preencha os campos')
  }
  try {
    const prefuncionario = await funcionarios.findOne({ email: email })

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
    }
  } catch (error) {
    res.status(404).json(error)
  }
})

//get funcionario
router.get('/get-funcionarios', async (req, res) => {
  try {
    const funcionarioData = await funcionarios.find()
    res.status(200).json(funcionarioData)
  } catch (err) {
    res.status(422).json(err)
  }
})

//get apenas um funcionario
router.get('/get-funcionario/:id', async (req, res) => {
  try {
    const { id } = req.params

    const funcionarioData = await funcionarios.findById({ _id: id })

    res.status(200).json(funcionarioData)
  } catch (err) {
    res.status(404).json(err)
  }
})

//edit dados de funcionario
router.patch('/edit-funcionario/:id', async (req, res) => {
  try {
    const { id } = req.params
    const editFuncionario = await funcionarios.findByIdAndUpdate(id, req.body, {
      new: true,
    })

    res.status(200).json(editFuncionario)
  } catch (err) {
    res.status(500).json(err)
  }
})

//deletar um funcionario
router.delete('/delete-funcionario/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deleteFuncionario = await funcionarios.findByIdAndDelete({ _id: id })

    res.status(200).json(deleteFuncionario)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router
