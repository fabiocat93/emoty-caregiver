<template>
  <div>
    <Row>
      <Col :xs="8" :sm="7" :md="6" :lg="4">
        <nuxt-link to="/account">
          <Avatar
            icon="ios-person"
            size="large"
            style="background-color: var(--primary-color)"
          />
        </nuxt-link>
      </Col>
      <Col id="testo" :xs="16" :sm="17" :md="18" :lg="20">
        <Row id="name-row">
          <nuxt-link v-if="$store.getters.getLoggedUser" to="/account">
            {{ $store.getters.getLoggedUser.identificationData.name }}
            {{ $store.getters.getLoggedUser.identificationData.surname }}
          </nuxt-link>
        </Row>
        <Row id="buttons-row">
          <h4>
            <u id="logout" @click="logout">
              Logout
            </u>
          </h4>
        </Row>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      // Store
      this.$store.commit('resetSession')
      this.$store.commit('resetLoggedUser')
      this.$store.commit('resetGroups')
      this.$store.commit('resetUsers')
      this.$store.commit('resetDisabilityGroups')
      this.$store.commit('resetActivities')

      // Cookies
      this.$cookies.removeAll()

      // Redirect
      this.$router.push('/login')
    }
  },
  layout: 'error-layout' // you can set a custom layout for the error page
}
</script>

<style scoped>
#testo {
  color: white;
}

#name-row {
  line-height: 48px;
}

#buttons-row {
  margin-top: -5px;
  line-height: 0px;
}

#logout {
  cursor: pointer;
}

.ivu-layout-header {
  padding: 0 5% !important;
}
</style>
