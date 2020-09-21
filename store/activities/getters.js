export const getActivities = (state) => {
  return state.activities
}

export const getActivityById = (state) => (id) => {
  return state.activities.find((activity) => activity.id === id)
}

export const getActivityByName = (state) => (name) => {
  return state.activities.find((activity) => activity.name === name)
}
