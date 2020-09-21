export const setLoggedUser = (context, payload) => {
  return context.commit('setLoggedUser', payload)

  /*
      1: EFFETTUARE TUTTI I CHECK:
      - CI SONO LE INFO OBBLIGATORIE?
      - TUTTE LE INFO CHE CI SONO, SONO STATE INSERITE CORRETTAMENTE?

      2: INVIARE TUTTO AL SERVER

      3: DARE RISPOSTA A SECONDA DI QUELLO CHE DICE IL SERVER

  */
  //context.commit('setUser', payload);
}


export const resetLoggedUser = (context) => {
  /*
      1: EFFETTUARE TUTTI I CHECK:
      - CI SONO LE INFO OBBLIGATORIE?
      - TUTTE LE INFO CHE CI SONO, SONO STATE INSERITE CORRETTAMENTE?

      2: INVIARE TUTTO AL SERVER

      3: DARE RISPOSTA A SECONDA DI QUELLO CHE DICE IL SERVER

  */
  return context.commit('resetLoggedUser')
}
