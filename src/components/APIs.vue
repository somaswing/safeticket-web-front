<template>
  <div id="apis">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'APIs',
  data() {
    return {
      msg: 'This is an api component',
    };
  },
};
</script>

<style scoped>
  #apis {
    width: 100%;
    height: 100vh;
    background-color: navy;
    opacity: 0.3;
  }
</style>
