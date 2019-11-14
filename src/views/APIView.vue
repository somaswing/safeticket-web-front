<template>
  <div class="api">
    <APIs/>
  </div>
</template>

<script>
import APIs from '@/components/APIs';

export default {
  name: 'APIView',
  components: { APIs },
  data() {
    return {};
  },
};
</script>

<style scoped>
  .space {
    height: 4px;
  }
</style>
