<template>
  <div class="api">
    <Home/>
    <About/>
    <Team/>
  </div>
</template>

<script>
import Home from '@/components/Home';
import About from '@/components/About';
import Team from '@/components/Team';

export default {
  name: 'APIView',
  components: { Home, About, Team },
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
