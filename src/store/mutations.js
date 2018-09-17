import last from 'lodash/last'
// mutations
const mutations = {
  addUser(state, payload) {
    const user = last(state.users)
    state.users.push({
      id: user ? user.id + 1 : 1,
      ...payload
    })
  },
  addBook(state, payload) {
    const book = last(state.books)
    state.books.push({
      id: book ? book.id + 1 : 1,
      ...payload
    })
  }
}

export default mutations
