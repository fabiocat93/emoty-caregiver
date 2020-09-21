<template>
  <div>
    <h4 class="filter-title"><label class="labeltext">...genere</label></h4>

    <!--
    <CheckboxGroup v-model="gender">
      <Checkbox label="M">
        <Icon type="ios-man"></Icon>
        <span>M</span>
      </Checkbox>
      <Checkbox label="F">
        <Icon type="ios-woman"></Icon>
        <span>F</span>
      </Checkbox>
    </CheckboxGroup>
    -->
    <div id="gender-filter">
      <input id="M" v-model="gender" type="checkbox" value="M" />
      <label for="M">M</label>
      <input id="F" v-model="gender" type="checkbox" value="F" />
      <label for="F">F</label>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    gender: {
      get() {
        return this.$store.getters.getAppFilters.gender
      },
      set(value) {
        this.$store.dispatch('setAppFiltersGender', value)
      }
    }
  },
  methods: {}
}
</script>

<style></style>
