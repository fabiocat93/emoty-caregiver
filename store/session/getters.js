export const isSessionPaired = (state) => {
  return state.session && state.session.paired
}

export const getSessionToken = (state) => {
  if (state.session) {
    return state.session.token
  }
  return null
}

export const isSessionLoggedIn = (state) => {
  if (state.session && state.session.token) {
    return true
  }
  return false
}
