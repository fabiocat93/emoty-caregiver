export const getDisabilityGroups = (state) => {
  return state.disabilityGroups
}

export const getDisabilities = (state) => {
  const disabilities = []
  state.disabilityGroups.forEach((disabilityGroup) => {
    disabilityGroup.disabilities.forEach((disability) => {
      disabilities.push(disability)
    })
  })

  return uniqueBy(disabilities, (it) => it.id)
}

function uniqueBy(data, key) {
  return [...new Map(data.map((x) => [key(x), x])).values()]
}

export const getDisabilityGroupNames = (state) => {
  const groups = []
  state.disabilityGroups.forEach((disabilityGroup) => {
    groups.push(disabilityGroup.name)
  })

  return groups
}

export const getDisabilitiesByGroupId = (state) => (id) => {
  state.disabilityGroups.forEach((disabilityGroup) => {
    if (disabilityGroup.id === id) {
      return disabilityGroup
    }
  })

  return null
}

export const getDisabilitiesByGroupName = (state) => (name) => {
  state.disabilityGroups.forEach((disabilityGroup) => {
    if (disabilityGroup.name === name) {
      return disabilityGroup
    }
  })

  return null
}

export const getDisabilityLevelsByDisabilityId = (state) => (id) => {
  const disabilities = store.getters.disabilities()

  disabilities.forEach((disability) => {
    if (disability.id === id) {
      return disability.levels
    }
  })

  return null
}

export const getDisabilityGroupById = (state) => (id) => {
  return state.disabilityGroups.find(
    (disabilityGroup) => disabilityGroup.id === id
  )
}
