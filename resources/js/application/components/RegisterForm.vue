<template>
  <form @submit.prevent="$emit('submit')">
    <div class="form-group row">
      <div class="col-md-6 offset-md-4">
        <h3 class="text-primary">Register</h3>
      </div>
    </div>
    <div class="form-group row">
      <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
      <div class="col-md-6">
        <input v-model="form.name"
               id="name" type="text" class="form-control" name="name" required autocomplete="name"
               autofocus>
      </div>
    </div>

    <div class="form-group row">
      <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

      <div class="col-md-6">
        <input v-model="form.email" id="email" type="email" class="form-control" name="email" value="email" required
               autocomplete="email">
      </div>
    </div>

    <div class="form-group row">
      <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
      <div class="col-md-6">
        <input v-model="form.password" id="password" type="password" class="form-control" name="password" required
               autocomplete="new-password">
      </div>
    </div>

    <div class="form-group row">
      <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

      <div class="col-md-6">
        <input v-model="form.password_confirmation" id="password-confirm" type="password" class="form-control"
               name="password_confirmation" required autocomplete="new-password">
      </div>
    </div>

    <div class="form-group row mt-5">
      <div class="col-md-6 offset-md-4">
        <button type="submit" class="btn btn-primary btn-block">
          Create Account
        </button>
      </div>
    </div>
  </form>
</template>
<script>
  export default {
    name: 'RegisterForm',
    props: {
      disabled: Boolean,
      form: {}
    }
  }
</script>
