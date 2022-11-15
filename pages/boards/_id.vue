<template>
    <div class="bg-white relative  w-full overflow-hidden h-[88vh] flex flex-col">

        <!-- members & menu -->
        <div class="bg-white  w-full flex justify-between items-center h-[12vh] px-12">
            <!-- members -->
            <div class="flex items-center space-x-3">
                <button class="secondary-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    <span>{{ selectedBoard.visibility }}</span>
                </button>
                <div v-if="selectedBoard.members && selectedBoard.members.length > 0" class="flex space-x-3">
                    <MemberCard v-for="memberId in selectedBoard.members.slice(0, 3)" :key="memberId"
                        :member-id="memberId" />
                </div>
                <button class="button p-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
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
        <div
            class=" grid auto-cols-auto grid-flow-col gap-x-10 overflow-auto bg-primarybg h-full w-full pt-6 pb-12 px-16 rounded-t-2xl z-50">
            <CardList v-for="list in cardLists" :key="list.id" :list="list" />

            <!-- add another list btn -->
            <!-- add card button -->
            <button
                class="flex items-center justify-between text-primary bg-[#DAE4FD] rounded-lg h-10 px-2 border border-transparent hover:border-primary w-[300px] flex-shrink-0">
                <span>Add another list</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
        </div>

        <!-- footer -->
        <!-- <MainFooter/> -->
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
    data() {
        return {
            cardLists: jsonData.lists
        }
    },
    head() {
        return {
            title: `Thullo - ${this.selectedBoard.title}`
        }
    },
    computed: {
        ...mapState(['selectedBoard'])
    },

}
</script>

<style>
/* width */
::-webkit-scrollbar {
    width: 8px;
    height:8px;
}

/* Track */
::-webkit-scrollbar-track {
    /* border-radius: 10px; */
    background: #c9c9c9;

}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #83868c;
    border-radius: 1px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #3c688b;
}
</style>