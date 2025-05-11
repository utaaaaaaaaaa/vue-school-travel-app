<script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      }
    },
    methods: {
      login(){
        window.user = this.username
        const redirectPath = this.$route.query.redirect || '/protected'
        this.$router.push(redirectPath)
      }
    }
  }
</script>

<template>
<div class="login">
  <form class="form" @submit.prevent="login">
    <h1>Login</h1>
    <label for="username">Username</label>
    <input v-model="username" name="username" type="text" id="username" placeholder="Username" class="input"></input>
    <label for="password">Password</label>
    <input v-model="password" name="password" type="password" id="password" placeholder="Password" class="input"></input>
    <button class="btn">Login</button>
  </form>
</div>
</template>

<style scoped>

</style>