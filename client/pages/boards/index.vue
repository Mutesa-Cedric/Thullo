<template>
    <div
        class="w-full overflow-hidden lg:px-40 md:px-32 sm:px-20 px-10  flex flex-col items-center space-y-8 xl:py-12 lg:py-6 md:py-4 py-2">
        <div class="w-full flex justify-between">
            <h1 class="text-heading-1 font-medium tracking-[-0.035em] text-lg">All Boards</h1>
            <button
                class="bg-primary rounded-md text-white px-3 py-1 font-medium text-sm flex items-center space-x-1">
                <span>+</span>
                <span>Add</span>
            </button>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
            <div v-for="(board, i) in boards" v-show="boards" :key="i">
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
    created() {
        this.boards = jsonData.boards
    }

}
</script>