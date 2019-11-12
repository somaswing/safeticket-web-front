<template>
  <div class="api">
    <div class="space"><p>{{ msg }}</p></div>
    <Demo/>
  </div>
</template>

<script>
import Demo from '@/components/Demo';

export default {
  name: 'APIView',
  components: { Demo },
  data() {
    return {
      msg: 'This page is for Demo',
    };
  },
};
</script>

<style scoped>
  .space {
    height: 4px;
  }
</style>
