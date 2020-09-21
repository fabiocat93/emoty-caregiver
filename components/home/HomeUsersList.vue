<template>
  <div>
    <homeUsersListUser
      v-for="(myUserInList, index) in myUsersInList"
      :key="myUserInList.id"
      @click.native="showClickedUser(index)"
      @filtersChanged
    >
      <img slot="img" :src="myUserInList.img" width="40" height="40" alt="" />
      <h3 id="name" slot="name">
        {{ myUserInList.identificationData.name }}
        {{ myUserInList.identificationData.surname }}
      </h3>
    </homeUsersListUser>
  </div>
</template>

<script>
import HomeUsersListUser from './HomeUsersListUser.vue'
// mixins
import { userFilters } from '~/mixins/userFilters'

export default {
  components: {
    homeUsersListUser: HomeUsersListUser
  },
  mixins: [userFilters],
  methods: {
    showClickedUser(index) {
      this.$router.push('/user/' + this.myUsersInList[index].id)
    }
  }
}
</script>

<style>
#name {
  color: black !important;
}
</style>
