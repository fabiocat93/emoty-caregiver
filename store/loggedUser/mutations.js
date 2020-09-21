export const setLoggedUser = (state, payload) => {
  state.loggedUser = payload
}

export const resetLoggedUser = (state) => {
  state.loggedUser = null
}
