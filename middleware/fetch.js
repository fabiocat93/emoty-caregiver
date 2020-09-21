import serverRestoreSession from '@/mixins/server'

export default function ({
  store,
  redirect,
  app
}) {

  if (app.$cookies.get('token')) {
    if (!store.getters.isSessionLoggedIn) {
      return serverRestoreSession(app.$axios).then(
        (data) => {
          store.commit('setSession', data.data.session)
          store.commit('setLoggedUser', data.data.loggedUser)
          store.commit('setGroups', data.data.groups)
          store.commit('setUsers', data.data.users)
          store.commit('setDisabilityGroups', data.data.disabilityGroups)
          store.commit('setActivities', data.data.activities)
        },
        (error) => {
          app.$cookies.removeAll()
          redirect('/login')
        }
      )
    }
  }
}
