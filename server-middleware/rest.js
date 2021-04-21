const bodyParser = require('body-parser')
const express = require('express')()

express.use(bodyParser.json())
express.all('/hello', (req, res) => {
  res.json({ data: 'Hello .... there' })
})

module.exports = express
