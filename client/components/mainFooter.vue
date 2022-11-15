<template>
    <div class="w-full py-2 flex items-center justify-center italic font-medium space-x-2 bg-primarybg text-gray-dark">
        <span>&copy; {{ new Date().getFullYear() }}</span>
        <a href="https://github.com/Mutesa-Cedric/" target="_blank">Mutesa Cedric</a>
    </div>
</template>

<script>
export default {
    name: "MainFooter",
}

</script>