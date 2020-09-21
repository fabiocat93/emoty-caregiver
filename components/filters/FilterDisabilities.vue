<template>
  <div>
    <label>Disabilità</label>

    <ul id="disabilities-filter">
      // TODO
        <!--
            TODO: FARE UN CHECKBOX CON TUTTE LE CATEGORIE DI DISABILITA' TRA QUELLE CHE HANNO I MIEI UTENTI

            E DENTRO METTERCI UN ALTRO CHECKBOX CON TUTTE LE DISABILITA'

            SE SELEZIONO LA CATEGORIA INSERISCO NELLA LISTA DEI FILTRI TUTTE LE DISABILITA' DELLA CATEGORIA

            SE SELEZIONO LA SINGOLA DISABILITA' INSERISCO LA DISABILITA' NELLA LISTA

            LA CATEGORIA E' CHECKATA SE E SOLO SE TUTTE LE SUE DISABILITÀ' SONO CHECKATE

        -->


      <li v-for="country in allCountries" :key="country">
        <input
          type="checkbox"
          :id="country"
          :value="country"
          v-model="countries"
        />
        <label :for="country">{{ country }}</label> <br>
      </li>
    </ul>
    <br />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {},
  computed: {
    allCountries() {
        // TODO: prendere tutte e solo le nazioni che sono degli utenti che ho scaricato!!
      return ["Italia", "Spagna", "Mongolia"];
    },
    countries: {
      get() {
        return this.$store.getters.appFilters.countries;
      },
      set(value) {
        this.$store.dispatch("setAppFiltersCountries", value);
      }
    }
  }
};
</script>

<style>

ul {
    list-style: none;
    padding-left: 0%;
}

</style>