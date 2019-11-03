<template>
  <div class="api">
    <Home/>
    <About/>
    <Tech/>
    <Team/>
  </div>
</template>

<script>
import Home from '@/components/Home';
import About from '@/components/About';
import Tech from '@/components/Tech';
import Team from '@/components/Team';

export default {
  name: 'APIView',
  components: { Home, About, Tech, Team },
  data() {
    return {};
  },
};
</script>

<style scoped>

</style>
