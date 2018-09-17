import axios from 'axios'

const actions = {
  getProducts({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get('/api/product/list')
        .then(({ data: { payload } }) => {
          commit('addProducts', payload)

          resolve(true)
        })
        .catch(reject)
    })
  }
}

export default actions
