<template>
  <simpleCenteredTemplate>
    <div id="my-box">
      <img id="logo" src="~/assets/images/cipo.svg" alt="Emoty" />

      <Alert
        v-if="msg.title !== '' && msg.desc !== '' && msg.type == 1"
        type="error"
        show-icon
      >
        {{ msg.title }}
        <span slot="desc">
          {{ msg.desc }}
        </span>
      </Alert>

      <Alert
        v-if="msg.title !== '' && msg.desc !== '' && msg.type == 2"
        type="success"
        show-icon
      >
        {{ msg.title }}
        <span slot="desc">
          {{ msg.desc }}
        </span>
      </Alert>

      <Row id="back-row">
        <Button size="large" to="/login" icon="md-arrow-back">Indietro</Button>
      </Row>
      <br />
      <Row>
        <Col span="24">
          <Input
            v-model.lazy="email"
            size="large"
            type="email"
            prefix="ios-at-outline"
            placeholder="Inserisci la tua mail"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Button
          long
          size="large"
          :loading="!clickableButton"
          @click="recoverPassword"
          >Recupera la password</Button
        >
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
      email: '',
      msg: {
        title: '',
        desc: '',
        type: 1
      },
      clickableButton: true
    }
  },
  methods: {
    checkMail() {
      if (this.checkEmail(this.email)) {
        this.msg.title = ''
        this.msg.desc = ''
        return true
      }
      this.msg.title = "Impossibile completare l'operazione"
      this.msg.desc = 'Inserisci un indirizzo email valido.'
      this.msg.type = 1
      return false
    },
    recoverPassword() {
      this.clickableButton = false

      if (this.checkMail()) {
        this.serverRecoverPassword(this.email).then(
          () => {
            this.msg.title = 'Invio email avvenuto con successo'
            this.msg.desc =
              'Troverai tutte le indicazioni per fare il recupero della password nella mail che hai appena ricevuto a ' +
              this.email
            this.msg.type = 2
            this.email = ''
            this.clickableButton = true
          },
          () => {
            /** A seconda del codice errore, mostrare un messaggio diverso */
            this.msg.title = "Impossibile completare l'operazione"
            this.msg.desc = "Assicurati di aver inserito l'indirizzo corretto"
            this.msg.type = 1

            this.clickableButton = true
          }
        )
      } else {
        // Non è stato inserito un indirizzo mail valido
        this.clickableButton = true
      }
    }
  }
}
</script>

<style scoped>
#back-row {
  text-align: left;
}

#my-box {
  width: 40%;
}
</style>
