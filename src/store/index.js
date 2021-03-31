import { createStore } from 'vuex'

export default createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    poem: {
      namespaced: true,
      state: () => ({
        title: '',
        content: '',
        poet: '',
        type: '',
        era: '',
        color: ''
      }),
      mutations: {
        setTitle (state, value) {
          state.title = value
        },
        setContent (state, value) {
          state.content = value
        },
        setPoet (state, value) {
          state.poet = value
        },
        setType (state, value) {
          state.type = value
        },
        setEra (state, value) {
          state.era = value
        },
        setColor (state, value) {
          state.color = value
        }
      }
    }
  }
})
