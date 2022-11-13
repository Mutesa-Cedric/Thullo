<template>
    <router-link :to="`/boards/${board.id}`">
        <div 
        v-if="board"
        class="container bg-white rounded-xl p-6 flex flex-col  space-y-4 border-2 border-transparent hover:border-primary cursor-pointer">
        <img :src="board.cover" class="rounded-xl w-full h-full" :alt="board.title" />
        <h2 class="font-medium text-lg">{{ board.title }}</h2>
        <div v-if="board.members && board.members.length > 0" class="flex items-center w-full space-x-2">
            <div class="flex space-x-2">
                <div v-for="member in board.members.slice(0,3)" :key="member.name">
                    <img :src="member.profileImage" class="w-10 h-10 rounded-md" />
                </div>
            </div>
            <div v-show="board.members.length > 3" class="text-sm text-gray-dark">
                +{{ board.members.length - 3 }} others
            </div>
        </div>
        <p v-else class="text-gray-dark text-sm"> no other members</p>
    </div>
    </router-link>
 
</template>

<script lang="ts">
export default {
    name: "BoardPreview",
    props: {
        board: {
            type: Object,
            default: () => {
                return null
            }
        }
    }
}
</script>

<style scoped>
.container {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
}
</style>
