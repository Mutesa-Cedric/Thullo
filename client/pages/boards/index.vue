<template>
    <div
        class="w-full overflow-hidden lg:px-40 md:px-32 sm:px-20 px-10  flex flex-col items-center space-y-8 xl:py-12 lg:py-6 md:py-4 py-2 bg-primarybg h-[88vh]">
        <div class="w-full flex justify-between">
            <h1 class="text-heading-1 font-semibold tracking-[-0.035em] text-lg">All Boards</h1>
            <button class="button space-x-1 py-1.5 px-3 font-semibold cursor-pointer" @click="openModal">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                <span>Add</span>
            </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            <div v-for="board in boards" v-show="boards" :key="board.id">
                <BoardPreview :board="board" />
            </div>
        </div>
    </div>
</template>

<script>

import jsonData from "../../data.json";

export default {
    name: "BoardsPage",
    data() {
        return {
            boards: null
        }
    },
    head() {
        return {
            title: "Thullo - Boards"
        }
    },
    created() {
        this.boards = jsonData.boards
    },
    methods: {
        openModal() {
            this.$store.commit('setAddBoardModalOpen', true);
        }
    },

}

</script>