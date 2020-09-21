<template>
  <div>
    <Row type="flex" align="middle">
      <Col span="8">
        <h4 class="filter-title"><label class="labeltext">...gruppi</label></h4>
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

    <ul id="groups-filter" class="group">
      <div v-for="group in $store.getters.getAllGroups" :key="group.id">
        <li>
          <Row type="flex" align="middle">
            <Col span="14">
              <input
                :id="group.id"
                v-model="groups"
                type="checkbox"
                :value="group.id"
              />

              <label :for="group" class="labeltext">{{ group.name }}</label>
            </Col>
            <Col>
              <div
                v-if="
                  groups.includes(group.id) &&
                    $store.getters.getAllSubgroupsByGroupId(group.id).length > 0
                "
                key="selectAllGroups"
              >
                <Button
                  class="filter-button"
                  shape="circle"
                  icon="md-done-all"
                  @click="selectAllSubgroups(group.id)"
                ></Button>

                <Button
                  class="filter-button"
                  shape="circle"
                  icon="ios-browsers-outline"
                  @click="deselectAllSubgroups(group.id)"
                ></Button>
              </div>
            </Col>
          </Row>

          <filterSubGroups
            v-if="groups.includes(group.id)"
            :id="group.id"
            key="filterSubgroups"
          />
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import FilterSubGroups from './FilterSubGroups.vue'

export default {
  components: {
    filterSubGroups: FilterSubGroups
  },
  data() {
    return {}
  },
  computed: {
    groups: {
      get() {
        return this.$store.getters.getAppFilters.groups
      },
      set(value) {
        this.$store.dispatch('setAppFiltersGroups', value)
      }
    }
  },
  methods: {
    selectAll() {
      const groups = this.$store.getters.getAllGroups
      const groupsIds = []

      groups.forEach((element) => {
        groupsIds.push(element.id)
      })

      this.$store.dispatch('setAppFiltersGroups', groupsIds)
    },
    deselectAll() {
      this.$store.dispatch('setAppFiltersGroups', [])
    },
    selectAllSubgroups(id) {
      const possibleGroupsToAdd = this.$store.getters.getAllSubgroupsByGroupId(
        id
      )
      const possibleGroupsIdsToAdd = []

      possibleGroupsToAdd.forEach((element) => {
        possibleGroupsIdsToAdd.push(element.id)
      })

      console.log('POSSIBLE GROUPS')
      console.log(possibleGroupsIdsToAdd)

      console.log('this.$store.getters.getAppFilters.subgroups')
      console.log(this.$store.getters.getAppFilters.subgroups)

      const union = possibleGroupsIdsToAdd.concat(
        this.$store.getters.getAppFilters.subgroups
      )

      console.log('UNION')
      console.log(union)

      this.$store.dispatch('setAppFiltersSubgroups', union)
    },
    deselectAllSubgroups(id) {
      const possibleGroupsToDelete = this.$store.getters.getAllSubgroupsByGroupId(
        id
      )
      const possibleGroupsIdsToDelete = []

      possibleGroupsToDelete.forEach((element) => {
        possibleGroupsIdsToDelete.push(element.id)
      })

      const difference = this.$store.getters.getAppFilters.subgroups.filter(
        (x) => !possibleGroupsIdsToDelete.includes(x)
      )
      this.$store.dispatch('setAppFiltersSubgroups', difference)
    }
  }
}
</script>

<style scoped>
.group {
  list-style: none;
  padding-left: 0%;
}
</style>
