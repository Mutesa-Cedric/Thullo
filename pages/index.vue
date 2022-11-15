<template>
  <div class="w-full flex items-center justify-center h-[80vh]">
    <SpinnerComponent />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'IndexPage',
  computed: {
    ...mapState(['user'])
  },
  mounted(){
    if(this.user) this.$router.push('/boards');
    this.$router.push('/login');
  }
})
</script>
