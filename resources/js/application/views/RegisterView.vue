<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="card">
          <div class="card-body">
            <RegisterForm :form="form" @submit="submit"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { postRegister } from '../api'
  import RegisterForm     from '../components/RegisterForm'

  export default {
    name: 'RegisterView',
    components: { RegisterForm },
    data: () => ({
      loading: false,
      form: {
        name: 'Peter Parker',
        email: 'webcrawler@example.com',
        password: '1234567890',
        password_confirmation: '1234567890'
      }
    }),
    methods: {
      async submit () {
        this.loading = true
        await postRegister(this.form)
        this.loading = false
      }
    }
  }
</script>

