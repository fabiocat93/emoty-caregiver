export const setUsers = (context, payload) => {
  context.commit('setUsers', payload)
}

export const resetUsers = (context) => {
  context.commit('resetUsers')
}


export const addNewUser = (context, payload) => {
  /*
      1: EFFETTUARE TUTTI I CHECK:
      - CI SONO tutte le INFO nel modo giusto?

      2: INVIARE TUTTO AL SERVER

      3: DARE RISPOSTA A SECONDA DI QUELLO CHE DICE IL SERVER
  */

  context.commit('addNewUser', payload);
}

export const setUserById = (context, payload) => {
  /*
      1: EFFETTUARE TUTTI I CHECK:
      - CI SONO tutte le INFO nel modo giusto?

      2: INVIARE TUTTO AL SERVER

      3: DARE RISPOSTA A SECONDA DI QUELLO CHE DICE IL SERVER
  */

  context.commit('setUserById', payload);
}

export const removeUserById = (context, payload) => {
  /*
      1: EFFETTUARE TUTTI I CHECK:
      - CI SONO tutte le INFO nel modo giusto?

      2: INVIARE TUTTO AL SERVER

      3: DARE RISPOSTA A SECONDA DI QUELLO CHE DICE IL SERVER
  */

  context.commit('removeUserById', payload);
}

export const removeAllUsers = (context) => {
  /*
      1: EFFETTUARE TUTTI I CHECK:
      - CI SONO LE INFO OBBLIGATORIE?
      - TUTTE LE INFO CHE CI SONO, SONO STATE INSERITE CORRETTAMENTE?

      2: INVIARE TUTTO AL SERVER

      3: DARE RISPOSTA A SECONDA DI QUELLO CHE DICE IL SERVER

  */

  context.commit('removeAllUsers');
}
