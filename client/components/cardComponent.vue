<template>
    <div v-if="card" class=" card-container bg-white rounded-xl p-6 flex flex-col  space-y-4 border-2">
        <img v-show="card.cover" :src="card.cover" class="rounded-xl w-full h-full" :alt="card.title" />
        <h2 class="font-medium text-lg">{{ card.title }}</h2>
        <div class="flex" :class="card.members&&'space-x-2'">
            <div v-if="card.members && card.members.length > 0" class="flex items-center space-x-2">
                <div class="flex space-x-2">
                    <MemberCard v-for="memberId in card.members.slice(0, 3)" :key="memberId" :member-id="memberId" />
                </div>
            </div>
            <button class="button p-2 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>

    </div>
</template>

<script>
export default {
    name: "CardComponent",
    props: {
        card: {
            type: Object,
            default: () => {
                return null
            }
        }
    }
}
</script>

<style scoped>

</style>