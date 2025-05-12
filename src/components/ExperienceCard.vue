<script>
export default {
  props: {
    experience: {type: Object,required: true},
  },
  data(){
    return {
      baseUrl: import.meta.env.BASE_URL,
    }
  },
}
</script>

<template>
  <div class="card">
    <img :src="`${baseUrl}images/${experience.image}`" :alt="experience.name"/>
    <span class="card__text">
      {{experience.name}}
    </span>
  </div>
</template>

<style scoped>

</style>