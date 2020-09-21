<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404" key="error">Page not found</h1>
    <h1 v-else key="error">An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  layout: 'error-layout' // you can set a custom layout for the error page
}
</script>
