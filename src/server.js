/*  Configurações do Express, que vai atuar como servidor web para a criação dos webservices  */

const port = 3003
const bodyParser = require('body-parser');
const express = require('express')
const dataBase = require('./Database')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/products', (req, res, next) => { // Pega lista de produtos
  res.send(dataBase.getProducts())
})

app.get('/products/:id', (req, res, next) => { // Pega poroduto pelo ID
  res.send(dataBase.getProduct(req.params.id))
})

app.post('/products', (req, res, next) => { // Cadastra produto
  const product = dataBase.saveProduct({
    name: req.body.name,
    price: req.body.price
  })
  res.send(product) // Converte para JSON
})

app.put('/products/:id', (req, res, next) => { // Altera produto
  const product = dataBase.saveProduct({
    id: req.params.id,
    name: req.body.name,
    price: req.body.price
  })
  res.send(product) // Converte para JSON
})

app.delete('/products/:id', (req, res, next) => { // Deleta produto
  const product = dataBase.deleteProduct(req.params.id)
  res.send(product) // Converte para JSON
})

app.listen(port, () => {
  console.log(`Server running on port ${port}.`)
})