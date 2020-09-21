<template>
  <Row>
    <Col id="side" span="5"><slot name="side"></slot></Col>
    <Col span="19"><slot name="main"></slot></Col>
  </Row>
</template>

<style scoped>
#side {
  padding-right: 2%;
}
</style>
