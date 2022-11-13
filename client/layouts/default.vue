<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="w-full relative  min-h-screen flex flex-col bg-white">
        <AddBoardModal v-show="addBoardModalOpen" />
        <NavBar />
        <Nuxt />
    </div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import Vue from "vue"

export default Vue.extend({
    name: 'DefaultLayout',
    computed: {
        ...mapState(['boardSelected', 'addBoardModalOpen'])
    }
})
</script>
<style>
html {
    font-family: "Poppins"
}

.button {
    @apply bg-primary rounded-md text-white font-medium text-sm flex items-center;
}
</style>