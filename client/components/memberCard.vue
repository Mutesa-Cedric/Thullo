<template>
    <div v-if="member">
        <img :src="member.profileImage" class="w-10 h-10 rounded-md" />
    </div>
</template>

<script>
import jsonData from "../data.json";
export default {
    name: "MemberCard",
    props: {
        memberId: {
            type: String,
            default: () => {
                return null
            }
        }
    },
    computed: {
        member() {
            return jsonData.users.find(member => member.id === this.memberId)
        }
    }
}
</script>