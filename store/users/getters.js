export const getUsers = (state) => {
  return state.users
}

export const getUserById = (state, getters) => (id) => {
  return getters.getUsers.find(user => user.id === id)
}
