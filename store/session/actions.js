export const setSessionPaired = (context, payload) => {
  return context.commit('setSessionPaired', payload)
}

export const setSessionToken = (context, payload) => {
  return context.commit('setSessionToken', payload)
}

export const resetSession = (context) => {
  return context.commit('resetSession')
}

export const setSession = (context, payload) => {
  return context.commit('setSession', payload)
}