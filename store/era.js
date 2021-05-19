export const state = () => ({
  eras: [],
})

export const mutations = {
  setEras(state, value) {
    state.eras = value
  },
}
