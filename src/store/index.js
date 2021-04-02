import { createStore } from 'vuex'
import poems from './poems.js'
import { db } from '../firebase.js'

// Fetch initial data
db.collection('poems').get().then(querySnapshot => {
  const contents = []

  querySnapshot.forEach(element => {
    const poem = element.data()
    poem.id = element.id

    contents.push(poem)
  })

  store.commit('poems/setPoems', contents)
}).catch(error => {
  console.log(error)
})

const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    poems
  }
})

export default store
