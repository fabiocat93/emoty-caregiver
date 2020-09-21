<template>
  <div id="side-section">
    <h2 v-if="$store.getters.getLoggedUser">
      Ciao {{ $store.getters.getLoggedUser.identificationData.name }}
    </h2>
    <p>
      Seleziona un utente per giocare o configurare le attività e monitora i
      loro progressi visualizzandone i dati.
    </p>
    <br />

    <p>
      <b
        >// TODO: FORSE qui È MEGLIO METTERE UNO SLIDER CON LE POSSIBILI
        ATTIVITA' CHE PUOI GIOCARE?</b
      >
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#side-section {
  text-align: left;
  align-items: initial;
  padding-right: 5%;
}
</style>
