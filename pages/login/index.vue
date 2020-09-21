<template>
  <simpleCenteredTemplate>
    <div id="my-box">
      <img id="logo" src="~/assets/images/cipo.svg" alt="Emoty" />

      <Alert v-if="message" type="error" show-icon>
        Impossibile effettuare il login
        <span slot="desc">
          {{ msg }}
        </span>
      </Alert>

      <Row>
        <Col span="12">
          <Input
            v-model="loginData.email"
            size="large"
            type="email"
            prefix="ios-at-outline"
            placeholder="Inserisci la tua mail"
          />
        </Col>
        <Col span="12">
          <Input
            v-model="loginData.password"
            size="large"
            type="password"
            prefix="ios-key"
            placeholder="Inserisci la tua password"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Button long size="large" :loading="!clickableButton" @click="login"
          >Login</Button
        >
      </Row>

      <br />
      <Row>
        <nuxt-link to="/passwordRecovery"
          >Hai dimenticato la password?
        </nuxt-link>
      </Row>
    </div>
  </simpleCenteredTemplate>
</template>

<script>
import SimpleCenteredTemplate from '~/templates/SimpleCenteredTemplate.vue'
import { dataCheck } from '~/mixins/dataCheck'
import { server } from '~/mixins/server'

export default {
  meta: {
    couldSkip: false
  },
  components: {
    simpleCenteredTemplate: SimpleCenteredTemplate
  },
  mixins: [dataCheck, server],
  layout: 'defaultWithoutHeader',
  data() {
    return {
      loginData: {
        email: '',
        password: ''
      },
      clickableButton: true,
      errors: {
        mail: false,
        password: false,
        match: false
      },
      msg: ''
    }
  },

  computed: {
    message() {
      if (this.errors.mail || this.errors.password || this.errors.match) {
        if (this.errors.mail && this.errors.password) {
          this.msg = "L'indirizzo email e la password inseriti non sono validi"
        } else if (this.errors.mail) {
          this.msg = "L'indirizzo email inserito non è valido"
        } else if (this.errors.password) {
          this.msg = 'La password inserita non è valida'
        } else {
          this.msg +=
            'Controlla di avere inserito le giuste credenziali e riprova!'
        }
        return true
      } else {
        this.msg = ''
        return false
      }
    }
  },

  methods: {
    checkInsertedMail() {
      if (!this.checkEmail(this.loginData.email)) {
        this.errors.mail = true
        return false
      } else {
        this.errors.mail = false
        return true
      }
    },
    checkInsertedPassword() {
      if (!this.checkPassword(this.loginData.password)) {
        this.errors.password = true
        return false
      } else {
        this.errors.password = false
        return true
      }
    },
    login() {
      const mailCheck = this.checkInsertedMail()
      const pswCheck = this.checkInsertedPassword()

      if (mailCheck && pswCheck) {
        this.clickableButton = false

        this.serverLogin(this.loginData).then(
          (data) => {
            this.errors.match = false

            // Store
            this.$store.commit('setSession', data.data.session)
            this.$store.commit('setLoggedUser', data.data.loggedUser)
            this.$store.commit('setGroups', data.data.groups)
            this.$store.commit('setUsers', data.data.users)
            this.$store.commit(
              'setDisabilityGroups',
              data.data.disabilityGroups
            )
            this.$store.commit('setActivities', data.data.activities)

            // Cookies
            this.$cookies.set('token', this.$store.getters.getSessionToken)

            // Redirect
            this.$router.push('/')
          },
          () => {
            this.errors.match = true

            /** A seconda del codice errore, mostrare un messaggio diverso */
            /*
            this.$Notice.error({
              duration: 0,
              title: 'Impossibile effettuare il login',
              desc:
                'Controlla di avere inserito le giuste credenziali e riprova!'
            })
            */
            this.clickableButton = true
          }
        )
      }
    }
  }
}
</script>

<style scoped>
#my-box {
  width: 40%;
}
</style>
