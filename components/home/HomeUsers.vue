<template>
  <div id="home-users-container">
    <h2>I tuoi utenti</h2>
    <Row>
      <Col :sm="24" :md="16" :lg="16">
        <Row>
          <Col span="24">
            <homeUsersListUser :color="1" @click.native="playWithGuest">
              <img
                slot="img"
                src="~/assets/images/logo.png"
                alt=""
                width="40"
                height="40"
              />
              <h3 id="host-title" slot="name">Ospite</h3>
            </homeUsersListUser>

            <homeUsersListUser :color="2" @click.native="addNewUser">
              <img
                slot="img"
                src="~/assets/images/logo.png"
                width="40"
                height="40"
                alt=""
              />
              <h3 slot="name" :style="{ color: '#fff !important' }">
                Aggiungi utente
              </h3>
            </homeUsersListUser>
            <br />
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <div id="scroll-item" v-if="$store.getters.getUsers">
              <homeUsersList />
            </div>
          </Col>
        </Row>
      </Col>
      <Col id="filters" :sm="0" :md="8" :lg="8">
        <homeFilters />
      </Col>
    </Row>
  </div>
</template>

<script>
import HomeUsersList from './HomeUsersList.vue'
import HomeUsersListUser from './HomeUsersListUser.vue'
import HomeFilters from './HomeFilters.vue'

export default {
  components: {
    homeUsersList: HomeUsersList,
    homeUsersListUser: HomeUsersListUser,
    homeFilters: HomeFilters
  },
  methods: {
    addNewUser() {
      console.log('Add new user')
      this.$router.push({ path: '/newUser' })
    },
    playWithGuest() {
      console.log('Play with guest')
      const userId = -1
      this.$router.push({ path: `/user/${userId}` })
    }
  }
}
</script>

<style scoped>
#home-users-container {
  background: white;
  padding: 2%;
  border-radius: 15px;
  margin-bottom: 2%;
}

#host-title {
  color: black !important;
}

#filters {
  padding-left: 2%;
}

#scroll-item {
  height: 650px;
  overflow-y: auto;
}
</style>
