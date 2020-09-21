<template>
  <div class="layout">
    <Layout>
      <Header id="header">
        <theHeader />
      </Header>
      <Content class="content-container">
        <nuxt />
      </Content>
    </Layout>
  </div>
</template>

<script>
import TheHeader from '~/components/theHeader/TheHeader'
export default {
  components: {
    theHeader: TheHeader
  }
}
</script>

<style>
#header {
  background-color: var(--very-light-background-color);
  box-shadow: 0px 2px #cdcfd6;
  margin-bottom: 2%;
}
</style>
