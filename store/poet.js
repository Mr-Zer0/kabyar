export const state = () => ({
  poets: [],
})

export const mutations = {
  setPoets(state, value) {
    state.poets = value
  },
}
