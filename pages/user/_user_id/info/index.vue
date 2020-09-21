<template>
  <div class="container">
    <div>
      <nuxt-link to="/user/1/sjsjsjsjs">VAI A 1</nuxt-link>
      <logo />
      <h1 class="title">
        EmotyCaregiver USER # {{ $route.params.user_id }} INFO
      </h1>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  meta: {
    requiresAuth: true
  },

  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.user_id)
  },

  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
