<script>
import sourceData from "@/data.json"
export default {
  data(){
    return {
      destinations: sourceData.destinations,
    }
  }
}
</script>

<template>
  <div id="nav">
    <div class="destinations">
      <router-link id="logo" to="/">Utaaa Vue Crash App</router-link>
      <router-link
          v-for="destination in destinations"
          :key="destination.id"
          :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}"
      >{{destination.name}}</router-link>
      <router-link :to="{name: 'protected'}">Dashboard</router-link>
    </div>
  </div>
</template>

<style lang="css">
  #nav .vue-school-active-link{
    color: green;
    border-bottom: 2px solid green;
  }
</style>