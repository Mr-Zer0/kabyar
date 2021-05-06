import { firedb } from '../utilities/firebase.js'

const bodyParser = require('body-parser')
const express = require('express')()

express.use(bodyParser.json())

express.get('/poem', (req, res) => {
  firedb
    .collection('poems')
    .get()
    .then((querySnapshot) => {
      const contents = []

      querySnapshot.forEach((element) => {
        const poem = element.data()

        contents.push({
          id: element.id,
          content: poem.content,
          era: poem.era,
          poet: poem.poet,
          title: poem.title,
          type: poem.type,
        })
      })

      res.json({ data: contents })
    })
})

module.exports = express
