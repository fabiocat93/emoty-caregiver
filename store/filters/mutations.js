export const setAppFiltersGender = (state, payload) => {
  state.appFilters.gender = payload
}

export const setAppFiltersAge = (state, payload) => {
  state.appFilters.minAge = payload[0]
  state.appFilters.maxAge = payload[1]
}

export const setAppFiltersCountries = (state, payload) => {
  state.appFilters.countries = payload
}

export const setAppFiltersDisabilities = (state, payload) => {
  state.appFilters.disabilities = payload
}

export const setAppFiltersGroups = (state, payload) => {
  state.appFilters.groups = payload
}

export const setAppFiltersSubgroups = (state, payload) => {
  state.appFilters.subgroups = payload
}

export const resetAppFiltersAge = (state) => {
  state.appFilters.minAge = 0
  state.appFilters.maxAge = 99
}

export const resetAppFiltersCountries = (state) => {
  state.appFilters.countries = []
}

export const resetAppFiltersDisabilities = (state) => {
  state.appFilters.disabilities = []
}

export const resetAppFiltersGroups = (state) => {
  state.appFilters.groups = []
}

export const resetAppFiltersSubgroups = (state) => {
  state.appFilters.subgroups = []
}
