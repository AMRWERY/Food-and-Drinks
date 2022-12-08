<template>
  <form v-on:submit.prevent="submitForm">
    <img src="./assets/logo.jpg">
    <div class="form-control">
      <label for="email">E-mail</label>
      <input type="email" id="emial" v-model.trim="email">
    </div>
    <div class="form-control">
      <label for="password">Password</label>
      <input type="password" id="password" v-model.trim="password">
    </div>
    <p v-if="!isValid" class="errors">Your E-mail and Password are required</p>
    <button v-on:click="userLogin">Login</button>
  </form>
  <google-map></google-map>
</template>

<script>
import GoogleMap from './GoogleMap.vue';

export default {
  components: {GoogleMap},

  data() {
    return {
      email: '',
      password: '',
      isValid: true,
      mode: 'login'
    }
  },

  methods: {
    submitForm() {
      this.isValid = true;
      if (this.email === '' || !this.email.includes('@') || this.password === '') {
        this.isValid = false;
        return;
      } else {
        this.$router.replace('/products');
      }

      if (this.mode === 'login') {
        this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        })
      }
    },
    userLogin() {
      fetch('https://food-and-drinks-159e2-default-rtdb.europe-west1.firebasedatabase.app/login.json', {
        method: 'POST',
        headers: {
          'Contact-Type': 'application/json'
        },
        body: JSON.stringify({
          userEmail: this.email,
          userPassword: this.password
        }),
      });
    },
    switchUserAuth() {
      if (this.mode === 'login') {
        this.mode = 'signup';
      } else {
        this.mode = 'login';
      }
    },
  },
}
</script>


<style scoped>
img {
  width: 250px;
}

button {
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font: inherit;
  background-color: #C147E9;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-right: 0.5rem;
  display: inline-block;
}

form {
text-align: center;
margin: auto;
padding: auto;
justify-content: center;
}
.form-control {
margin: 0.5rem 0;
border: 0;
}

label {
font-weight: bold;
display: block;
margin-bottom: 0.5rem;
}

input {
width: 20rem;
border: 1px solid #ccc;
border-radius: 8px;
font: inherit;
margin-right: auto;
margin-left: auto;
margin: 0.5rem 0;
}

input[type='checkbox'] {
display: inline;
width: auto;
border: none;
}

a {
display: contents;
}
.errors {
color: red;
font-weight: bold;
}
</style>

