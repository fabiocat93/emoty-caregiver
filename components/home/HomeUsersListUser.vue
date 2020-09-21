<template>
  <div>
    <Col span="12">
      <Card v-if="color === 1" id="card" class="guest">
        <div class="userInList">
          <Row>
            <Col :sm="9" :md="7" :lg="5"><slot name="img"></slot></Col>
            <Col :sm="15" :md="17" :lg="19">
              <slot id="name" name="name"></slot>
            </Col>
          </Row>
        </div>
      </Card>
      <Card v-else-if="color === 2" id="card" class="new-user">
        <div class="userInList">
          <Row>
            <Col :sm="9" :md="7" :lg="5"><slot name="img"></slot></Col>
            <Col :sm="15" :md="17" :lg="19">
              <slot id="name" name="name"></slot>
            </Col>
          </Row>
        </div>
      </Card>
      <Card v-else id="card" class="standard">
        <div class="userInList">
          <Row>
            <Col :sm="9" :md="7" :lg="5"><slot name="img"></slot></Col>
            <Col :sm="15" :md="17" :lg="19">
              <slot id="name" name="name"></slot>
            </Col>
          </Row>
        </div>
      </Card>
    </Col>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: Number,
      default: 0
    }
  },
  methods: {}
}
</script>

<style scoped>
.userInList {
  cursor: pointer;
}

.guest {
  background: var(--tertiary-color);
}

.new-user {
  background: var(--secondary-color);
}

.standard {
  background: var(--light-background-color);
}

#card {
  border-radius: 15px;
  margin: 1%;
}
</style>
