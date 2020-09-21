<template>
  <div>
    <Row type="flex" align="middle">
      <Col span="8">
        <h4 class="filter-title">
          <label class="labeltext">...nazionalità</label>
        </h4>
      </Col>
      <Col span="4">
        <Button
          class="filter-button"
          shape="circle"
          icon="md-done-all"
          @click="selectAll"
        ></Button>
      </Col>
      <Col span="4">
        <Button
          class="filter-button"
          shape="circle"
          icon="ios-browsers-outline"
          @click="deselectAll"
        ></Button>
      </Col>
    </Row>

    <ul id="countries-filter">
      <li v-for="country in allUsefulCountries" :key="country">
        <input
          type="checkbox"
          :id="country"
          :value="country"
          v-model="countries"
        />
        <label :for="country">{{ country }}</label> <br />
      </li>
    </ul>
  </div>
</template>

<script>
import { userFilters } from '../../mixins/userFilters'
import { mapActions } from 'vuex'

export default {
  mixins: [userFilters],

  methods: {
    selectAll() {
      this.$store.dispatch(
        'setAppFiltersCountries',
        this.calculateUsefulCountries()
      )
    },
    deselectAll() {
      this.$store.dispatch('resetAppFiltersCountries')
    }
  },
  computed: {
    countries: {
      get() {
        console.log(JSON.stringify(this.$store.getters.appFilters))
        return this.$store.getters.getAppFilters.countries
      },
      set(value) {
        this.$store.dispatch('setAppFiltersCountries', value)
      }
    }
  }
}
</script>

<style>
ul {
  list-style: none;
  padding-left: 0%;
}
</style>
