<template>
  <div class="row justify-content-center">
    <div class="col-md-8 col-lg-5">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title text-primary mb-4">Log In</h3>
          <form @submit.prevent="submit">
            <div class="form-group">
              <label for="email">E-Mail Address</label>
              <input v-model="form.email" :disabled="loading"
                     id="email" type="email" class="form-control" name="email" value="email" required autocomplete="email">
            </div>

            <div class="form-group">
              <label for="password">Password</label>
              <input v-model="form.password" :disabled="loading"
                     id="password" type="password" class="form-control" name="password" required autocomplete="new-password">
            </div>

            <div class="form-group">
              <div class="row">
                <div class="col col-md-6">
                  <router-link :to="{name: 'Register'}" class="btn btn-link">
                    New Account
                  </router-link>
                </div>
                <div class="col col-md-6">
                  <button :disabled="loading"
                          type="submit" class="btn btn-primary btn-block">
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { postLogin } from '../api'

  export default {
    name: 'LoginView',
    data: () => ({
      loading: false,
      form: {
        email: 'webcrawler@example.com',
        password: '1234567890'
      }
    }),
    methods: {
      async submit () {
        try {
          this.loading = true
          await postLogin(this.form)
          this.loading = false
          await this.$router.push({ name: 'index' })
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style scoped>

</style>
