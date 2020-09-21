<template>
  <div class="layout">
    <Layout>
      <theHeader />
      <Content>
        <div>
          <nuxt />
        </div>
      </Content>
    </Layout>
  </div>
</template>
<script>
import TheHeader from '~/components/theHeader/TheHeader'
export default {
  components: {
    theHeader: TheHeader
  },
  data() {
    return {}
  }
}
</script>

<style scoped></style>
