<template>
  <div class="api">
    <h1>{{ msg }}</h1>
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

</style>
