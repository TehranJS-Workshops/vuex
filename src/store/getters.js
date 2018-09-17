const getters = {
  usersLength: state => {
    return state.users.length
  },
  productsLength: state => {
    return state.products.length
  }
}

export default getters
