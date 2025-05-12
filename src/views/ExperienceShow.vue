<script>
import sourceData from "@/data.json";
export default {
  props: {
    id: {type: String, required: true},
    experienceSlug: {type: String, required: true},
  },
  computed: {
    experience() {
      return sourceData.destinations.find(
          destination => destination.id === parseInt(this.id)
      ).experiences.find(
          experience => experience.slug === this.experienceSlug
      )
    }
  },
  data(){
    return {
      baseUrl: import.meta.env.BASE_URL,
    }
  },
}
</script>

<template>
  <section>
    <h1>{{experience.name}}</h1>
    <img :src="`${baseUrl}images/${experience.image}`" :alt="experience.name">
    <p>{{experience.description}}</p>
  </section>
</template>

<style scoped>

</style>