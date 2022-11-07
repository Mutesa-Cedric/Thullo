<template>
    <div class="h-screen text-blue-600 w-full flex items-center justify-center">
        {{ id }}
    </div>
</template>

<script>
export default {
    name: "BoardPage",
    // eslint-disable-next-line require-await
    async asyncData({ params }) {
        return {
            id: params._id
        }
    }
}
</script>