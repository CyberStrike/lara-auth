<template>
  <div class="container">
    <h1>Account View</h1>
    <p v-html="user">
      {{ user }}
    </p>
    <button @click="logout" class="btn btn-block btn-danger">Log Out</button>
  </div>
</template>

<script>
  import { getUser, postLogout } from '../api'

  export default {
    name: 'AccountView',
    data: () => ({
      user: null
    }),
    methods: {
      async setUser () {
        this.user = await getUser()
      },
      async logout () {
        try {
          await postLogout()
          await this.$router.push({ name: 'Login' })
        } catch (e) {
          console.log(e)
        }
      }
    },
    mounted () {
      this.setUser()
    }
  }
</script>

<style scoped>

</style>
