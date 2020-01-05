<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title text-primary">Log In</h3>
            <form @submit.prevent="submit">
              <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                <div class="col-md-6">
                  <input v-model="form.email" id="email" type="email" class="form-control" name="email" value="email" required autocomplete="email">
                </div>
              </div>

              <div class="form-group row">
                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                <div class="col-md-6">
                  <input v-model="form.password" id="password" type="password" class="form-control" name="password" required autocomplete="new-password">
                </div>
              </div>

              <div class="form-group row mb-0">
                <div class="col-md-6 offset-md-4">
                  <button type="submit" class="btn btn-primary btn-block">
                    Log In
                  </button>
                </div>
              </div>
            </form>
          </div>
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
      form: {
        email: 'webcrawler@example.com',
        password: '1234567890'
      }
    }),
    methods: {
      async submit () {
        try {
          await postLogin(this.form)
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
