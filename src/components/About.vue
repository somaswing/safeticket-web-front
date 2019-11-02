<template>
  <div id="about">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'This is an about component',
    };
  },
};
</script>

<style scoped>
  #about {
    width: 100%;
    height: 100vh;
    background-color: magenta;
    opacity: 0.3;
  }
</style>
