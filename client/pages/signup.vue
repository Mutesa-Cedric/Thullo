<template>
    <div class="flex flex-col items-center space-y-12">
        <form @submit.prevent="signup">
            <div class="flex flex-col space-y-1">
                <h1 class="title">Create an account</h1>
            </div>
            <div class="flex flex-col space-y-6 w-full pb-4">
                <div class="input-container">
                    <label for="username" class="font-medium  text-gray-500"> Your username</label>
                    <input id="username" v-model="username" type="text" />
                </div>
                <div class="input-container">
                    <label for="email" class="font-medium  text-gray-500"> Your email</label>
                    <input id="email" v-model="email" type="email" />
                </div>
                <div class="input-container">
                    <label for="password" class="font-medium  text-gray-500"> Your password</label>
                    <input id="password" v-model="password" type="password" />
                </div>
            </div>
            <button v-if="!loading" :disabled="!enableSubmit"
                :class="!enableSubmit && 'cursor-not-allowed opacity-70'">signup</button>
            <button v-if="loading" disabled type="button" class="bg-primary/75">
                <svg role="status" class="inline mr-3 w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#E5E7EB" />
                    <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentColor" />
                </svg>
                Loading...
            </button>
        </form>
        <div class="flex itemms-center text-sm space-x-2 font-medium">
            <span class="text-heading-1">got an account? </span>
            <router-link to="/login">
                <span class="text-primary">Login </span>
            </router-link>
        </div>
    </div>
</template>

<script>
import jsonData from "../data.json";

export default {
    name: "SignupPage",
    layout: "auth",
    data() {
        return {
            username: "",
            email: "",
            password: "",
            enableSubmit: false,
            loading: null
        }
    },
    watch: {
        username() {
            this.enableSubmit = this.username.length > 0 && this.email.length > 0 && this.password.length > 0
        },
        email() {
            this.enableSubmit = this.username.length > 0 && this.email.length > 0 && this.password.length > 0
        },
        password() {
            this.enableSubmit = this.username.length > 0 && this.email.length > 0 && this.password.length > 0
        }
    },
    methods: {
        signup() {
            this.loading = true;
            setTimeout(() => {
                this.loading = false
                this.email = ""
                this.username = ""
                this.password = "";
                this.$store.commit('setUser', jsonData.users[0]);
                this.$router.push('/boards');
            }, 2000)
        }
    }
}
</script>