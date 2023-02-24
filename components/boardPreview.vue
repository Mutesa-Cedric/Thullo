<template>
    <router-link :to="`/boards/${board.id}`">
        <div v-if="board"
            class="card-container bg-white rounded-xl p-6 flex flex-col  space-y-4 border-2 border-transparent hover:border-primary cursor-pointer">
            <!-- div with a loading linear gradient -->
            <div v-if="!imgLoaded" class="w-full h-40  bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse rounded-xl">
            </div>
            <img v-show="board.cover" ref="imgRef" :src="board.cover" :class="imgLoaded ? 'h-full' : 'h-0'"
                class="rounded-xl w-full" :alt="board.title" />
            <h2 class="font-medium text-lg">{{ board.title }}</h2>
            <div v-if="board.members && board.members.length > 0" class="flex items-center w-full space-x-2">
                <div class="flex space-x-2">
                    <MemberCard v-for="memberId in board.members.slice(0, 3)" :key="memberId" :member-id="memberId" />
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
    },
    data() {
        return {
            imgLoaded: false
        }
    },
    // check if image was loaded
    mounted() {
        //   get img ref
        const imgRef = this.$refs.imgRef as HTMLImageElement
        //   add event listener
        imgRef.addEventListener('load', () => {
            this.imgLoaded = true
        });
    }
}
</script>

<style scoped>
.card-container {
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
}
</style>
