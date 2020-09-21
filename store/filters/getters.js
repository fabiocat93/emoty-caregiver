export const getDefaultAppFilters = () => {
  return {
    gender: [],
    minAge: 0,
    maxAge: 99,
    countries: [],
    disabilities: [],
    groups: [],
    subgroups: []
  }
}

export const getAppFilters = (state) => {
  return state.appFilters
}
