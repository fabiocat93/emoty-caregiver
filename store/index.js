import Vuex from 'vuex'

import filters from './filters'

import disabilityGroups from './disabilityGroups'
import activities from './activities'
import groups from './groups'
import loggedUser from './loggedUser'
import session from './session'
import users from './users'

const myStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      filters,


      disabilityGroups,
      activities,
      groups,
      loggedUser,
      session,
      users
    }
  })
}

export default myStore
