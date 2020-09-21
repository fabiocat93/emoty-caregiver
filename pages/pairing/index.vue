<template>
  <simpleCenteredTemplate>
    <div id="my-box">
      <Row>
        <Col id="back-col" span="24">
          <Button size="large" @click="back" icon="md-arrow-back"
            >Indietro</Button
          >
        </Col>
      </Row>
      <br />
      <br />
      <h2>
        Trascina le faccine per ordinarle come nell'altro dispositivo
      </h2>
      <br />
      <br />

      <Row>
        <Col span="24">
          <pairingList />
        </Col>
      </Row>
    </div>
  </simpleCenteredTemplate>
</template>

<script>
import SimpleCenteredTemplate from '~/templates/SimpleCenteredTemplate.vue'
import PairingList from '~/components/pairing/PairingList.vue'

export default {
  meta: {
    requiresAuth: true,
    requiresNotPaired: true
  },
  components: {
    simpleCenteredTemplate: SimpleCenteredTemplate,
    pairingList: PairingList
  },
  methods: {
    back() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
#back-col {
  text-align: left;
}

#my-box {
  width: 60%;
}
</style>
