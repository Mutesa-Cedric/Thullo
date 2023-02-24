<template>
    <div class="flex flex-col space-y-6 w-[300px] flex-shrink-0">

        <!-- list heading -->
        <div class="flex w-full items-center justify-between px-1">
            <h2>{{ list.title }}</h2>
            <span class="">...</span>
        </div>

        <!-- items -->
        <div v-if="items" class="flex flex-col justify-start space-y-6">
            <CardComponent v-for="item in items" :key="item.id" :item="item" />
        </div>

        <!-- add item button -->
        <button
            class="flex items-center justify-between text-primary bg-[#DAE4FD] rounded-lg w-full h-10 px-2 border border-transparent hover:border-primary">
            <span>Add another item</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
    </div>
</template>

<script lang="ts">
import jsonData from "../data";
import { List, ListItem } from "@types"
export default {
    name: "ItemList",
    props: {
        list: {
            type: Object as () => List,
            required: true
        }
    },
    computed: {
        items(): ListItem[] {
            return jsonData.listItems.filter(item => item.list_id === this.list.id)
        }
    }
}
</script>