<template>
  <div class="row justify-content-center">
    <div class="col-md-5">
      <h3 class="card-title mb-5">
        Account View
      </h3>
      <div v-if="user" class="card mb-5">
        <div class="card-body">
          <dl  class="row">
            <dt class="col-sm-3">Name</dt>
            <dd class="col-sm-9">{{ user.name  }}</dd>

            <dt class="col-sm-3">Email</dt>
            <dd class="col-sm-9"> {{ user.email }}</dd>
          </dl>
        </div>
      </div>
      <div v-else class="mb-5">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <button @click="logout" class="btn btn-block btn-danger">Log Out</button>
    </div>
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
    created () {
      this.setUser()
    }
  }
</script>

<style scoped>

</style>
