<template>
    <div class="flex flex-col items-center space-y-12">
        <form>
            <div class="flex flex-col space-y-1">
                <h1 class="title">Create an account</h1>
            </div>
            <div class="flex flex-col space-y-6 w-full pb-4">
                <div class="input-container">
                    <label for="username" class="font-medium  text-gray-500"> Your username</label>
                    <input id="username" v-model="usename" type="email" />
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
            <button>signup</button>
        </form>
        <div class="flex itemms-center text-sm space-x-2 font-medium">
            <span class="text-heading-1">got an account? </span>
            <router-link to="/signup">
                <span class="text-primary">Login </span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignupPage",
    layout: "auth",
    data() {
        return {
            username: "",
            email: "",
            password: ""
        }
    }
}
</script>