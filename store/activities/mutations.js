export const addActivityConfiguration = (state, payload) => {
  const obj = state.activities.find((activity) => activity.id === payload.id)
  obj.configurations.push(payload.configuration)
  let index = state.activities.indexOf(obj)
  state.activities.fill(obj, index, index++)
}

export const addHistoryToActivity = (state, payload) => {
  const obj = state.activities.find((activity) => activity.id === payload.id)
  obj.history.push(payload.history)
  let index = state.activities.indexOf(obj)
  state.activities.fill(obj, index, index++)
}

export const resetActivities = (state) => {
  state.activities = null
}

export const setActivities = (state, payload) => {
  state.activities = payload
}
