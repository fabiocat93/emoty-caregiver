export const setGroups = (context, payload) => {
  context.commit('setGroups', payload)
}

export const resetGroups = (context) => {
  context.commit('resetGroups')
}
