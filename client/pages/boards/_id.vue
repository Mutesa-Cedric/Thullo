<template>
    <div class="bg-white relative  w-full overflow-hidden h-[88vh] flex flex-col">

        <!-- members & menu -->
        <div class="bg-white  w-full flex justify-between items-center h-[12vh] px-12">
            <!-- members -->
            <div class="flex items-center space-x-2">
                <button class="secondary-btn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path
                            stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <span>{{ selectedBoard.visibility }}</span>
                </button>
                <div v-if="selectedBoard.members && selectedBoard.members.length > 0" class="flex space-x-2">
                    <div v-for="member in selectedBoard.members.slice" :key="member.name">
                        <img :src="member.profileImage" class="w-10 h-10 rounded-md" />
                    </div>
                </div>
                <button class="button p-2"><svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </button>
            </div>

            <!-- menu -->
            <button class="secondary-btn ">
                <span>...</span>
                <span>Show Menu</span>
            </button>
        </div>

        <!-- actual content -->
        <div class=" grid auto-cols-auto grid-flow-col gap-x-6 overflow-auto bg-primarybg h-full w-full pt-6 px-16 rounded-t-2xl">
            <CardList v-for="list in cardLists" :key="list.id" :list="list" />
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import jsonData from "../../data.json";

export default {
    name: "BoardPage",

    // eslint-disable-next-line require-await
    async asyncData({ route, app }) {
        const selectedBoard = jsonData.boards.filter(board => board.id === route.params.id)[0];

        app.store.commit('setSelectedBoard', selectedBoard);
    },
    data(){
        return {
            cardLists:jsonData.lists
        }
    },
    head() {
        return {
            title: this.selectedBoard.title
        }
    },
    computed: {
        ...mapState(['selectedBoard'])
    },

}
</script>