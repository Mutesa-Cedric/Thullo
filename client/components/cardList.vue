<template>
    <div class="flex flex-col space-y-6 w-[300px] flex-shrink-0">

        <!-- list heading -->
        <div class="flex w-full items-center justify-between px-1">
            <h2>{{ list.title }}</h2>
            <span class="">...</span>
        </div>

        <!-- cards -->
        <div v-if="cards" class="flex flex-col justify-start space-y-6">
            <CardComponent v-for="card in cards" :key="card.id" :card="card" />
        </div>

        <!-- add card button -->
        <button class="flex items-center justify-between text-primary bg-[#DAE4FD] rounded-lg w-full h-10 px-2 border border-transparent hover:border-primary">
            <span>Add another card</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</template>

<script>
import jsonData from "../data.json";
export default {
    name: "CardList",
    props: {
        list: {
            type: Object,
            default: () => {
                return null
            }
        }
    },
    computed: {
        cards() {
            return jsonData.cards.filter(card => card.list_id === this.list.id)
        }
    }
}
</script>