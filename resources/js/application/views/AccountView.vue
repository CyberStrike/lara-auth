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
      async setUser (user) {
        this.user = user
      },
      async logout () {
        await postLogout()
      }
    },
    mounted () {
      this.setUser()
    },
    async beforeRouteEnter (to, from, next) {
      try {
        const user = await getUser()
        next((vm) => { vm.setUser(user) })
      } catch (e) {
        if (e) {
          next({
            path: '/login',
            query: { redirect: to.fullPath }
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>
