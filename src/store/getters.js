const getters = {
  usersLength: state => {
    return state.users.length
  },
  booksLength: state => {
    return state.books.length
  }
}

export default getters
