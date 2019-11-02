<template>
  <div class="api">
    <h1>{{ msg }}</h1>
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

</style>
