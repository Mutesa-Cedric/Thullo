<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div
        class="flex w-full h-screen items-center justify-center bg-cover bg-center bg-no-repeat"
        style="background-image:url('/login-signup-bg.svg')">
        <Nuxt />
    </div>
</template>

<style>
form {
    @apply space-y-6 xl:w-[30vw] lg:w-[40vw] md:w-[50vw] sm:w-[80vw] w-[90vw] p-12 bg-white ;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

form button {
    @apply py-3 rounded-md w-full font-medium tracking-wide;
    background: linear-gradient(180deg, #2F80ED 0%, #2F80ED 100%);
    display:flex;
    align-items:center;
    justify-content:center;
    color:white;
    text-transform:uppercase;
}
form .title{
    @apply text-heading-1 font-bold text-2xl;
}

.input-container {
    @apply space-y-2 flex flex-col w-full;
}


.input-container input{
    @apply outline-none focus:border-primary border-2 border-[#DEDEDE] rounded-md py-2 w-full px-2 text-gray-600;
}

</style>