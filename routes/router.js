const express = require('express')
const router = express.Router()
const funcionarios = require('../models/funcionarioSchema')

// router.get('/', (req, res) => {
//   console.log('conectado')
// })

router.post('/add-funcionario', async (req, res) => {
  // console.log(req.body)
  const { nome, sobrenome, email, nnis } = req.body

  if (!nome || !sobrenome || !email || !nnis) {
    res.status(404).send('Por favor preencha os campos')
  }
  try {
    const prefuncionario = await funcionarios.findOne({ email: email })
    console.log(prefuncionario)

    if (prefuncionario) {
      res.status(404).send('Este funcionário já foi adicionado previamente.')
    } else {
      const addFuncionario = new funcionarios({
        nome,
        sobrenome,
        email,
        nnis,
      })
      await addFuncionario.save()
      res.status(201).json()
      console.log(addFuncionario)
    }
  } catch (error) {
    res.status(404).send(error)
  }
})

module.exports = router
