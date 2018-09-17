// mutations
const mutations = {
  addUser(state, payload) {
    state.users.push(payload)
  },
  addProducts(state, payload) {
    state.products = state.products.concat(payload)
  }
}

export default mutations
