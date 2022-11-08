<template>

  <!-- main container -->
  <div class=" container border flex items-center justify-between px-12 py-2 w-full bg-white">

    <!-- left side -->
    <div class="flex items-center space-x-3">
      <div class="space-x-8 flex items-center text-heading-1 pr-2 border-r border-r-[#E0E0E0]">
        <!-- logo -->
        <img src="/logo.svg" alt="logo" class="w-24 h-16" />

        <!-- board title -->
        <h1 class="text-heading-1 text-lg font-medium">{{ boardTitle }}</h1>

      </div>

      <!-- boards selector -->
      <div className="flex items-center p-2 border rounded-lg bg-gray-light space-x-2">
        <div class="grid grid-cols-3 w-4 h-4">
          <div v-for="(_dot, i) in dots" :key="i" class="bg-gray-dark w-1 h-1"></div>
        </div>
        <h2 class="text-gray-dark">All boards</h2>
      </div>
    </div>

    <!-- right side -->
    <div class="flex items-center space-x-8">

      <!-- search -->
      <div class="relative ">
        <input class="" />
      </div>

      <!-- profile -->
      <div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
export default Vue.extend({
  name: 'NavBar',
  props: {
    boardTitle: {
      type: String,
      default: "Backticks Board"
    },
    user: {
      type: Object,
      default: () => {
        return {
          name: "Ingabire Divine",
          profileImage: ""
        }
      }
    }
  },
  data() {
    return {
      dots: new Array(9).fill(1)
    }
  },
})
</script>

<style scoped>
.container {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
}

input{

}
</style>