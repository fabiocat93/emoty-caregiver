export const setActivities = (context, payload) => {
  context.commit('setActivities', payload)
}

export const addTemporaryConfiguration = (context, payload) => {
  /*
      1: EFFETTUARE TUTTI I CHECK:
      - CI SONO LE INFO OBBLIGATORIE?
      - TUTTE LE INFO CHE CI SONO, SONO STATE INSERITE CORRETTAMENTE?

      2: INVIARE TUTTO AL SERVER

      3: DARE RISPOSTA A SECONDA DI QUELLO CHE DICE IL SERVER

  */
  // context.commit('setUser', payload);
}

export const addPermanentConfiguration = (context, payload) => {
  /*
        1: EFFETTUARE TUTTI I CHECK:
        - TUTTE LE INFO CHE CI SONO, SONO STATE INSERITE CORRETTAMENTE?

        2: INVIARE TUTTO AL SERVER

        3: DARE RISPOSTA A SECONDA DI QUELLO CHE DICE IL SERVER
    */
}

export const addHistory = (context, payload) => {
  /*
    1: EFFETTUARE TUTTI I CHECK:
    - TUTTE LE INFO CHE CI SONO, SONO STATE INSERITE CORRETTAMENTE?

    2: INVIARE TUTTO AL SERVER

    3: DARE RISPOSTA A SECONDA DI QUELLO CHE DICE IL SERVER
*/
}

export const resetActivities = (state) => {
  context.commit('resetActivities')
}
