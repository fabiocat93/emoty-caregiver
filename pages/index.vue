<template>
  <homePageTemplate>
    <homeSideInfo slot="side" />
    <homeUsers slot="main" />
  </homePageTemplate>
</template>

<script>
import HomeSideInfo from '../components/home/HomeSideInfo.vue'
import HomeUsers from '../components/home/HomeUsers.vue'
import HomePageTemplate from '~/templates/HomePageTemplate.vue'

export default {
  components: {
    homePageTemplate: HomePageTemplate,
    homeSideInfo: HomeSideInfo,
    homeUsers: HomeUsers
  }, // you can set a custom layout for the error page
  meta: {
    requiresAuth: true
  },
  layout: 'default',
  methods: {}
}
</script>

<style>
#row-container {
  width: 100%;
}
</style>
