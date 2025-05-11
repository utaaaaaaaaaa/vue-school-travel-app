<script>
  export default {
    data(){
      return {
        username: window.user,
      }
    },
    methods: {
      logout(){
        window.user = null
        this.$router.push({name: 'Home', query: {logout: null}})
      }
    }
  }
</script>

<template>
 <div>
   <h1>Protected, {{username}}</h1>
   <button @click="logout" class="btn">Logout</button>
   <router-link :to="{name: 'invoices'}">
     <button class="btn">Invoices</button>
   </router-link>
 </div>
</template>

<style scoped>

</style>