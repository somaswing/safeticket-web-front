<template>
  <div class="api">
    <h1>{{ msg }}</h1>
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
    return {
      msg: 'This page is for Main',
    };
  },
};
</script>

<style scoped>

</style>
