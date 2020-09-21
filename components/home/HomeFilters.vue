<template>
  <div>
    <h3 class="filter-title">Filtra per...</h3>
    <br />
    <filterGenders />
    <br />
    <filterAges />
    <br />
    <filterCountries v-if="allUsefulCountries.length > 1" key="countries" />
    <br />
    <filterGroups v-if="$store.getters.getAllGroups.length > 1" key="groups" />

    <!-- // TODO: Ho lasciato in sospeso il filtro per disabilità perché tutto dipende da come vogliamo organizzare tutte le disabilità sull'orizzontale i3Lab -->
  </div>
</template>

<script>
import FilterGenders from '../filters/FilterGenders'
import FilterAges from '../filters/FilterAges'
import FilterCountries from '../filters/FilterCountries'
import FilterGroups from '../filters/FilterGroups'

// mixins
import { userFilters } from '../../mixins/userFilters'

export default {
  components: {
    filterGenders: FilterGenders,
    filterAges: FilterAges,
    filterCountries: FilterCountries,
    filterGroups: FilterGroups
  },
  mixins: [userFilters],
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
.filter-title {
  color: black !important;
}

.filter-button {
  color: var(--primary-color) !important;
}
</style>
