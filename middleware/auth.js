export default function ({
  store,
  route,
  redirect
}) {

  if (route.meta[0].requiresAuth) {
    if (store.getters.isSessionLoggedIn) {
      // C'è bisogno di essere loggati e l'utente è loggato
      console.log("C'è bisogno di essere loggati e l'utente è loggato");

      if (route.meta[0].requiresNotPaired) {
        if (store.getters.isSessionPaired) {
          // C'è bisogno di essere loggati e l'utente è loggato, ma non bisogna essere paired e l'utente lo è
          console.log("C'è bisogno di essere loggati e l'utente è loggato, ma non bisogna essere paired e l'utente lo è");
          return redirect('/')
        } else {
          // C'è bisogno di essere loggati e l'utente è loggato, ma non bisogna essere paired e l'utente infatti NON lo è
          console.log("C'è bisogno di essere loggati e l'utente è loggato, ma non bisogna essere paired e l'utente infatti NON lo è");
        }
      } else if (route.meta[0].requiresPairing) {
        if (store.getters.isSessionPaired) {
          // C'è bisogno di essere loggati e l'utente è loggato e bisogna essere paired e l'utente lo è
          console.log("C'è bisogno di essere loggati e l'utente è loggato e bisogna essere paired e l'utente lo è");
        } else {
          // C'è bisogno di essere loggati e l'utente è loggato e bisogna essere paired, ma l'utente NON lo è
          console.log("C'è bisogno di essere loggati e l'utente è loggato e bisogna essere paired, ma l'utente NON lo è");
          return redirect('/pairing')
        }
      } else {}
    } else {
      // C'è bisogno di essere loggati e l'utente NON è loggato
      console.log("C'è bisogno di essere loggati e l'utente NON è loggato");
      return redirect('/login')
    }
  } else if (route.meta[0].couldSkip) {
    if (store.getters.isSessionLoggedIn) {
      // Si può saltare questa pagina se l'utente è loggato e lo è
      console.log("Si può saltare questa pagina se l'utente è loggato e lo è");
      return redirect('/')
    } else {
      console.log("Si può saltare questa pagina se l'utente è loggato ma NON lo è");
      // Si può saltare questa pagina se l'utente è loggato ma NON lo è
    }
  }
}
