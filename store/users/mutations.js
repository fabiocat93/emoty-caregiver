export const setUsers = (state, payload) => {
  state.users = payload
}

export const resetUsers = (state) => {
  state.users = null
}

export const addNewUser = (state, payload) => {
  state.users.push(payload)
}

export const setUserById = (state, payload) => {
  let user = state.users.find((user) => user.id === payload.id)
  let index = state.users.indexOf(user)
  user = payload
  state.users.fill(user, index, index++)
}

export const removeUserById = (state, payload) => {
  const user = state.users.find((user) => user.id === payload)
  const index = state.users.indexOf(user)
  if (index > -1) {
    state.users.splice(index, 1)
  }
}

export const removeAllUsers = (state) => {
  state.users = []
}
