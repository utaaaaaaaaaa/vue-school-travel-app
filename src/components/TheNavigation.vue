<script>
import sourceData from "@/data.json"
import AppLink from "@/components/AppLink.vue";
export default {
  components: {AppLink},
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
      <AppLink id="logo" to="/">Utaaa Vue Crash App</AppLink>
      <AppLink
          v-for="destination in destinations"
          :key="destination.id"
          :to="{name: 'destination.show', params: {id: destination.id, slug: destination.slug}}"
      >{{destination.name}}</AppLink>
      <AppLink :to="{name: 'protected'}">Dashboard</AppLink>
      <AppLink to="https://github.com">Github</AppLink>
    </div>
  </div>
</template>

<style lang="css">
  #nav .vue-school-active-link{
    color: green;
    border-bottom: 2px solid green;
  }
</style>