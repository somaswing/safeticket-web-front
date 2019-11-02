<template>
  <div id="demo">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Demo',
  data() {
    return {
      msg: 'This is a demo component',
    };
  },
};
</script>

<style scoped>
  #demo {
    width: 100%;
    height: 100vh;
    background-color: coral;
    opacity: 0.3;
  }
</style>
