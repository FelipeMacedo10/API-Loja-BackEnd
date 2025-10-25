const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
app.use(cors())

const produtos = [
    { id: 1, nome: 'Smartphone Motorola G85', marca: 'Motorola', preco: 1800.00, quantidade: 50 },
    { id: 2, nome: 'TV LG 40 polegadas', marca: 'LG', preco: 1499.00, quantidade: 12 }
]

app.get('/', (req, res) => {
  res.redirect('/produtos')
})

app.get('/produtos', (req, res) => {
  res.json(produtos)
})

app.get('/produtos/:id', (req, res) => {
    const id = +req.params.id
    if (req.params.id && id >= 0) {
        const prod = produtos.find(p => p.id === id)
        if (prod) { 
          res.json(prod) 
        } else {
          res.json({})
        }
    } else {
      res.json({})
    }
})

app.get('/produtos/:id/preço', (req, res) => {
    const id = +req.params.id
    if (req.params.id && id >= 0) {
        const prod = produtos.find(p => p.id === id)
        if (prod) { 
          res.json(prod.preco) 
        } else {
          res.json({})
        }
    } else{
      res.json({})
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
