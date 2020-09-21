export const setAppFiltersGender = (context, payload) => {
  context.commit('setAppFiltersGender', payload)
}

export const setAppFiltersAge = (context, payload) => {
  context.commit('setAppFiltersAge', payload)
}

export const setAppFiltersCountries = (context, payload) => {
  context.commit('setAppFiltersCountries', payload)
}

export const setAppFiltersDisabilities = (context, payload) => {
  context.commit('setAppFiltersDisabilities', payload)
}

export const setAppFiltersGroups = (context, payload) => {
  context.commit('setAppFiltersGroups', payload)

  let possibleSubgroups = []
  context.getters.getAppFilters.groups.forEach((group) => {
    possibleSubgroups = possibleSubgroups.concat(
      context.getters.getAllSubgroupsByGroupId(group)
    )
  })

  const possibleSubgroupsIds = []
  possibleSubgroups.forEach((element) => {
    possibleSubgroupsIds.push(element.id)
  })

  const subgroups = []
  context.getters.getAppFilters.subgroups.forEach((subgroupInFilters) => {
    if (possibleSubgroupsIds.includes(subgroupInFilters)) {
      subgroups.push(subgroupInFilters)
    }
  })

  if (subgroups && subgroups.length > 0) {
    context.commit('setAppFiltersSubgroups', subgroups)
  }
}

export const setAppFiltersSubgroups = (context, payload) => {
  context.commit('setAppFiltersSubgroups', payload)
}

export const resetAppFiltersAge = (context) => {
  context.commit('resetAppFiltersAge')
}

export const resetAppFiltersCountries = (context) => {
  context.commit('resetAppFiltersCountries')
}

export const resetAppFiltersDisabilities = (context) => {
  context.commit('resetAppFiltersDisabilities')
}
