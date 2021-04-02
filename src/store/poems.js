const poems = {
  namespaced: true,
  state: () => ({
    poems: []
  }),
  mutations: {
    setPoems (state, value) {
      const temp = state.poems.concat(value)

      state.poems = temp
    }
  }
}

export default poems
