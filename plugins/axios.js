export default function ({
  store,
  $axios,
  redirect,
  app
}) {
  $axios.onRequest((config) => {
    console.log('Making request to ' + config.url)

    if (app.$cookies.get('token') && store.getters.isSessionLoggedIn) {
      // Adding authentication token to server request
      console.log("Adding authentication token to server request");
      $axios.setToken(store.getters.getSessionToken)
    } else {
      $axios.setToken(false)
    }
  })

  /*
  $axios.onResponse((response) => {
    // console.log('Intercepting response: ' + response)
  })
  */

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
