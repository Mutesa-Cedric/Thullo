<template>
    <transition name="modal">
        <div
           ref="modalRef"  class="modal-wrapper fixed top-0 left-0 w-full h-screen overflow-hidden transition-opacity flex items-center"
            @click="checkClick">
            <div
                class="bg-white relative p-7  mx-auto rounded-lg flex flex-col space-y-8 xl:w-[25vw] md:w-[50vw] sm:w-[80vw] w-[90vw] items-center">
                <!-- image selection -->
                <div class="w-full rounded-lg h-24 bg-gray-100"></div>
                <!-- board name -->
                <input
                    class="inp outline-none rounded-lg py-2 px-2 w-full border-2 border-[#E0E0E0] " type="text"
                    placeholder="add a board name" />
                <!-- buttons -->
                <div class="flex w-full justify-between">
                    <button class="secondary-btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path
                            stroke-linecap="round" stroke-linejoin="round"
                                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                        <span>cover</span>
                    </button>
                    <button class="secondary-btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path
                                stroke-linecap="round" stroke-linejoin="round"
                                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                        </svg>
                        <span>private</span>
                    </button>
                </div>
                <div class="flex self-end space-x-4 mt-4">
                    <button class="text-gray-dark text-sm" @click="closeModal">Cancel</button>
                    <button class="button py-2 px-5" @click="closeModal">Create</button>
                </div>
                <button class="button p-2 absolute right-4 -top-2" @click="closeModal">
                    <svg
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </transition>
</template>
  
<script>

export default {
    methods: {
        closeModal() {
            this.$store.commit('setAddBoardModalOpen', false);
        },
        checkClick(e) {
            if (e.target === this.$refs.modalRef) {
                this.closeModal();
            }
        }
    }

}
</script>

<style>
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

.inp {
    filter: drop-shadow(0px 4px 12px rgba(0, 0, 0, 0.1));
}

.secondary-btn {
    @apply bg-gray-light text-gray-dark py-2 px-5 rounded-lg flex items-center space-x-2 hover:bg-[#E0E0E0];
}
</style>