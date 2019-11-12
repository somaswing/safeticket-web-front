<template>
  <div class="api">
    <div class="space"><p>{{ msg }}</p></div>
    <APIs/>
  </div>
</template>

<script>
import APIs from '@/components/APIs';

export default {
  name: 'APIView',
  components: { APIs },
  data() {
    return {
      msg: 'This page is for API',
    };
  },
};
</script>

<style scoped>
  .space {
    height: 4px;
  }
</style>
