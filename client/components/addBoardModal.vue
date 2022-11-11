<template>
    <transition name="modal">
        <div class="modal-wrapper fixed top-0 left-0 w-full h-screen overflow-hidden transition-opacity flex items-center">
            <div
                class="bg-white relative p-6  mx-auto rounded-lg flex flex-col space-y-3 xl:w-[30vw] md:w-[50vw] sm:w-[80vw] w-[90vw] items-center">
                <!-- image selection -->
                <div class="w-full rounded-lg h-24 bg-gray-50"></div>
                <!-- board name -->
                <input 
                class="inp outline-none rounded-lg py-2 px-2 w-full border-2 border-[#E0E0E0] " type="text" placeholder="add a board name"/>
                <!-- buttons -->
                <div class="flex w-full justify-between">
                    <button class="secondary-btn">cover</button>
                    <button class="secondary-btn">private</button>
                </div>
                <div class="flex self-end space-x-4">
                    <button class="text-gray-dark text-sm" @click="closeModal">Cancel</button>
                    <button class="button py-2 px-5" @click="closeModal">Create</button>
                </div>
            </div>
        </div>
    </transition>
</template>
  
<script>

export default {
    methods: {
        closeModal() {
            this.$store.commit('setAddBoardModalOpen', false);
        }
    }

}
</script>

<style scoped>
.modal-enter-active {
    @apply ease-out duration-300;
}

.modal-enter-from {
    @apply opacity-0;
}

.modal-enter-to {
    @apply opacity-100;
}

.modal-leave-active {
    @apply ease-in duration-200;
}

.modal-leave-from {
    @apply opacity-100;
}

.madal-leave-to {
    @apply opacity-0;
}


.modal-wrapper {
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
}

.modal-wrapper::webkit-scrollbar {
    display: none;
}

.inp{
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));
}
</style>