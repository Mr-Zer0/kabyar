import { firedb } from '../utilities/firebase.js'
import express from './rest.js'

const collection = 'poems'

express.get('/all', (req, res) => {
  firedb
    .collection(collection)
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
          color: poem.color,
        })
      })

      res.json({ data: contents })
    })
})

express.get('/:id', (req, res) => {
  firedb
    .collection(collection)
    .doc(req.params.id)
    .get()
    .then((doc) => {
      res.json({ data: doc.data() })
    })
})

module.exports = express
