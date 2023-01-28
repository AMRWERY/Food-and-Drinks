<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <v-card
    class="mx-auto"
    max-width="344"
  >
  <h5>Login to your account</h5>
  <button type="button" class="btn btn-primary"><i class="fa-brands fa-facebook-f"></i></button>
  <button type="button" class="btn btn-info"><i class="fa-brands fa-twitter"></i></button>
  <button type="button" class="btn btn-danger"><i class="fa-brands fa-google-plus-g"></i></button>
  <hr>or
    <v-container>
      <v-text-field
        v-model="email"
        color="primary"
        label="Email"
        variant="underlined"
      ></v-text-field>

      <v-text-field
        v-model="password"
        color="primary"
        label="Password"
        placeholder="Enter your password"
        variant="underlined"
      ></v-text-field>
    </v-container>
  
      <v-spacer></v-spacer>

      <v-btn
      variant="flat"
      color="secondary"
    >
    Login
    </v-btn>
  </v-card>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      email: null,
      password: null,
    }),
  }
</script>

<style scoped>
 .container {
  margin: 5rem auto;
  text-align: center;
}

.btn {
  margin-left: 8px;
  margin-right: 8px;
}
</style>