export const state = () => ({
  poems: [],
})

export const mutations = {
  setPoems(state, value) {
    state.poems = value
  },
  addPoems(state, value) {
    state.poems.push(value)
  },
}
