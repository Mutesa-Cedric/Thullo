<template>
    <div class="flex flex-col items-center space-y-12">
        <form >
            <div class="flex flex-col space-y-1">
                <p class="text-[#757575] tex-sm">Welcome back! 👋</p>
                <h1 class="title">Sign in to your account</h1>
            </div>
            <div class="flex flex-col space-y-8 w-full pb-4">
                <div class="input-container">
                    <label for="email" class="font-medium  text-gray-500"> Your email</label>
                    <input id="email" v-model="email" type="email" />
                </div>
                <div class="input-container">
                    <label for="password" class="font-medium  text-gray-500"> Your password</label>
                    <input  id="password" v-model="password" type="password" />
                </div>  
            </div>
            <button>continue</button>
            <p class="text-primary font-medium text-center">Forgot your password?</p>
        </form>
        <div class="flex itemms-center text-sm space-x-2 font-medium">
            <span class="text-heading-1">don&apos;t have account? </span>
            <router-link to="/signup">
                <span class="text-primary"> sign up</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginPage",
    layout: "auth",
    data() {
        return {
            email: '',
            password: ''
        }
    }
}
</script>
