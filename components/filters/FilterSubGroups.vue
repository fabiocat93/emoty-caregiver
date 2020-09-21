<template>
  <div>
    <ul class="subgroup">
      <div
        v-for="subgroup in $store.getters.getAllSubgroupsByGroupId(id)"
        :key="subgroup.id"
      >
        <li>
          <input
            id="subgroup"
            v-model="subgroups"
            type="checkbox"
            :value="subgroup.id"
          />
          <label for="subgroup">{{ subgroup.name }}</label>
          <br />
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  computed: {
    subgroups: {
      get() {
        return this.$store.getters.getAppFilters.subgroups
      },
      set(value) {
        this.$store.dispatch('setAppFiltersSubgroups', value)
      }
    }
  },
  methods: {}
}
</script>

<style scoped>
.subgroup {
  list-style: none;
  padding-left: 10%;
}
</style>
