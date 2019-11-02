<template>
  <div id="home">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      msg: 'This is a home component',
    };
  },
};
</script>

<style scoped>
  #home {
    width: 100%;
    height: 100vh;
    background-color: green;
    opacity: 0.3;
  }
</style>
