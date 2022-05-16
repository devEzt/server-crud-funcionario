const mongoose = require('mongoose')

const db = 'mongodb+srv://devezt:devpass@cluster0.pp0lx.mongodb.net/crudmernciss?retryWrites=true&w=majority'

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('conexao iniciada'))
  .catch((err) => console.log(err.message))
