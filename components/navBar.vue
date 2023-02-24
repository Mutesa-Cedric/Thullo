<template>
<!-- main container -->
<div class=" container border flex items-center justify-between px-12 h-[12vh] w-full bg-white">

    <!-- left side -->
    <div class="flex items-center space-x-3">
        <div class="space-x-8 flex items-center text-heading-1" :class="selectedBoard && ' pr-3 border-r border-r-[#E0E0E0]'">
            <!-- logo -->
            <img src="/logo.svg" alt="logo" class="w-24 h-16 shrink-0" />
            <!-- board title -->
            <h1 v-if="selectedBoard" class="text-heading-1 text-lg font-medium">{{ selectedBoard.title }}</h1>
        </div>

        <!-- boards selector -->
        <button v-if="selectedBoard" type="button" class="flex items-center p-2 border rounded-lg bg-gray-light hover:border-primary  space-x-2">
            <div class="grid grid-cols-3 w-4 h-4">
                <div v-for="(_dot, i) in dots" :key="i" class="bg-gray-dark w-1 h-1"></div>
            </div>
            <h2 class="text-gray-dark">All boards</h2>
        </button>
    </div>

    <!-- right side -->
    <div class="flex items-center space-x-8">
        <!-- search -->
        <div class="inp-container bg-white p-1  rounded-lg flex items-center space-x-5 border-2 border-transparent" :class="inputActive && 'border-primary'">
            <input type="text" class="outline-none placeholder:text-[#BDBDBD] placehoder:font-medium py-2 placeholder:text-sm text-sm text-gray-500 px-3 " placeholder="Keyword..." @focus="setInputActive(true)" @blur="setInputActive(false)" />
            <button class="button py-2 px-5">Search</button>
        </div>

        <!-- profile -->
        <div v-if="user" class="flex items-center space-x-2 ">
            <img :src="user.profileImage" class="w-10 h-10 rounded-lg" />
            <p class="text-sm font-semibold">{{ user.name }}</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-4 h-3 ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    mapState
} from 'vuex';
import Vue from "vue"

export default Vue.extend({
    name: 'NavBar',
    data() {
        return {
            dots: new Array(9).fill(1),
            inputActive: false
        }
    },
    computed: {
        ...mapState(['selectedBoard', 'user'])
    },
    methods: {
        setInputActive(state: boolean) {
            this.inputActive = state
        }
    }
})
</script>

<style scoped>
.container {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.05);
}

.inp-container {
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));
}
</style>
