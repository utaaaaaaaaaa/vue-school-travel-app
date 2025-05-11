<script >
import sourceData from '@/data.json'
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "@/components/GoBack.vue";
export default {
  // data(){
  //   return {
  //     destination: null
  //   }
  // },
  // methods: {
  //   async initData(){
  //     console.log('Fetching:', `https://travel-dummy-api.netlify.app/${this.$route.params.slug}.json`);
  //     const response = await fetch(`https://travel-dummy-api.netlify.app/${this.$route.params.slug}.json`)
  //     this.destination = await response.json()
  //   }
  // },
  components: {ExperienceCard, GoBack},
  computed: {
    // destinationId(){
    //   return parseInt(this.$route.params.id);
    // },
    destination(){
      console.log(this.slug)
      return sourceData.destinations.find(
          (s) => s.id === parseInt(this.id)
      )
    }
  },
  props: {
    id: {type: String, required: true},
    slug: {type: String, required: true},
  },
  // async created(){
  //    this.initData()
     // this.$watch(
     //     () => this.$route.params,
     //     this.initData
     // )
  // }
}
</script>

<template>
  <div>
    <section v-if="destination" class="destination">
      <h1>{{destination.name}}</h1>
      <GoBack/>
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name">
        <p>{{destination.description}}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Experiences in {{destination.name}}</h2>
      <div class="cards">
        <router-link
            v-for="experience in destination.experiences"
            :key="experience.slug"
            :to="{name: 'experience.show', params: {id: this.id ,experienceSlug: experience.slug}}"
        >
          <ExperienceCard
              :experience="experience"
          />
        </router-link>
      </div>
      <router-view/>
    </section>
  </div>
</template>

<style scoped>

</style>