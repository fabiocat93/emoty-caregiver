<template>
  <div>
    <Row type="flex" justify="space-between" class="code-row-bg">
      <Col id="user" span="8">
        <theHeaderUserSection></theHeaderUserSection
      ></Col>
      <Col id="logo-container" span="8">
        <nuxt-link to="/">
          <img
            id="logo"
            src="~/assets/images/cipo.png"
            alt="Emoty"
            height="60"
          />
        </nuxt-link>
      </Col>
      <Col id="pairing-button-row" span="8">
        <span id="pairing-button" @click="pair">
          <Avatar
            v-if="$store.getters.isSessionPaired"
            key="pairing"
            icon="ios-git-compare"
            size="large"
            style="background-color: var(--primary-color)"
          />
          <Avatar
            v-else
            id="unpaired-button"
            key="pairing"
            icon="md-git-compare"
            size="large"
          />
        </span>
      </Col>
    </Row>

    <Modal
      v-model="modal1"
      title="Vuoi disaccoppiare il dispositivo associato?"
      ok-text="Conferma"
      cancel-text="Annulla"
      :loading="loading"
      :closable="closable"
      @on-ok="unpair"
    >
      <p>
        Se annulli l'associazione coi dispositivo, non ti sarà possibile
        controllarlo durante il gioco
      </p>
    </Modal>
  </div>
</template>
<script>
import TheHeaderUserSection from '~/components/theHeader/TheHeaderUserSection'
export default {
  components: {
    theHeaderUserSection: TheHeaderUserSection
  },
  data() {
    return {
      modal1: false,
      loading: true,
      closable: true
    }
  },
  layout: 'homePageLayout', // you can set a custom layout for the error page
  methods: {
    unpair() {
      this.$store.dispatch('setSessionPaired', false).then(() => {
        this.modal1 = false
        this.$Notice.success({
          title: 'Dispositivo disaccoppiato correttamente',
          desc: ''
        })
      })
    },
    pair() {
      if (this.$store.getters.isSessionPaired) {
        this.modal1 = true
      } else {
        this.$router.push('/pairing')
      }
    }
  }
}
</script>

<style scoped>
#user {
  color: white;
}

#pairing-button-row {
  color: white;
  text-align: right;
}

#pairing-button {
  cursor: pointer;
}

#logo {
  vertical-align: middle;
  color: white;
  text-align: center;
}
#logo-container {
  text-align: center;
}

#unpaired-button {
  color: var(--primary-color);
  border: var(--primary-color);
  border-style: solid;
  border-width: thin;
  background: var(--light-background-color);
}
</style>
