<script>
import TheNavigation from "@/components/TheNavigation.vue";
import {defineComponent} from "vue";

export default defineComponent({
  components: {TheNavigation}
})

</script>

<template>
  <TheNavigation />

  <div class="container">
<!--  slide-->
    <router-view class="view left-sidebar" name="LeftSidebar" v-slot="{Component}">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
<!--    <router-view :key="$route.path"></router-view>-->
    <router-view v-slot="{Component}" class="main-view">
      <transition name="slide" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>

</template>

<style lang="css">
.slide-enter-active, .slide-leave-active{
  transition: opacity 0.6s ,transform 0.6s ;
}
.slide-enter-from, .slide-leave-to{
  opacity: 0;
  transform: translateX(-100%);
}

.container {
  display: flex;
}

.left-sidebar {
  width: 20%;
}

.main-view {
  width: 100%;
}

</style>

