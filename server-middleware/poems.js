import { firedb } from '../utilities/firebase.js'
import express from './rest.js'

express.get('/all', (req, res) => {
  firedb
    .collection('poems')
    .get()
    .then((querySnapshot) => {
      const contents = []

      querySnapshot.forEach((element) => {
        const poem = element.data()

        contents.push({
          id: element.id,
          poem: poem.poem,
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
