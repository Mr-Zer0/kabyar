import { firedb } from '../../utilities/firebase.js'

const bodyParser = require('body-parser')
const app = require('express')()

app.use(bodyParser.json())

const collection = 'eras'
const collectionObj = firedb.collection(collection)

// http://baseurl/api/v1/eras/all
app.get('/all', async (req, res) => {
  try {
    const snapshot = await collectionObj.get()

    if (snapshot.empty) res.status('204').json({ data: [] })

    const contents = []

    snapshot.forEach((elem) => {
      contents.push(_makeContent(elem))
    })

    res.status(200).json({ data: contents })
  } catch (error) {
    // For development purpose
    res.send(error)
  }
})

// http://baseurl/api/v1/eras/[id]
app.get('/:id', async (req, res) => {
  try {
    const snapshot = await collectionObj.doc(req.params.id).get()

    if (!snapshot.exists) res.status(204).json({ data: [] })

    res.status(200).json({ data: _makeContent(snapshot, true) })
  } catch (error) {
    // For development purpose
    res.send(error)
  }
})

/**
 * Private function to prepared content data
 * @param {QuerySnapshot} snapshot
 * @returns Object
 */
const _makeContent = (snapshot) => {
  const data = snapshot.data()

  data.id = snapshot.id

  return data
}

module.exports = app
