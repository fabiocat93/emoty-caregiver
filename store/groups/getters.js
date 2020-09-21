export const getAllGroups = (state) => {
  return state.groups
}

export const getAllSubgroups = (state, getters) => {
  let subgroups = []
  getters.getAllGroups.forEach((group) => {
    if (group.subgroups) {
      subgroups = subgroups.concat(group.subgroups)
    }
  })

  return subgroups
}

export const getGroupById = (state, getters) => (id) => {
  return getters.getAllGroups.find((group) => group.id === id)
}

export const getSubgroupById = (state, getters) => (id) => {
  return getters.getAllSubgroups.find((group) => group.id === id)
}

export const getAllSubgroupsByGroupId = (state, getters) => (id) => {
  if (getters.getGroupById(id).subgroups) {
    return getters.getGroupById(id).subgroups
  }
  return []
}
