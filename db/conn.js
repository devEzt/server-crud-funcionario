const mongoose = require('mongoose')

const db = process.env.URL_MONGO

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('conexao iniciada'))
  .catch((err) => console.log(err.message))
