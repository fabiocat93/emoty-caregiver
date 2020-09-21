export const setSession = (state, payload) => {
  state.session = payload
}

export const setSessionPaired = (state, payload) => {
  state.session.paired = payload
}

export const setSessionToken = (state, payload) => {
  state.session.token = payload
}

export const resetSession = (state) => {
  state.session = null
}
