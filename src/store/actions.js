const actions = {
  addUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('addUser', payload)

      resolve(true)
    })
  },
  addBook({ commit }, payload) {
    return new Promise((resolve, reject) => {
      commit('addBook', payload)

      resolve(true)
    })
  }
}

export default actions
