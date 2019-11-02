<template>
  <div id="team">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {
      msg: 'This is a team component',
    };
  },
};
</script>

<style scoped>
  #team {
    width: 100%;
    height: 100vh;
    background-color: cyan;
    opacity: 0.3;
  }
</style>
