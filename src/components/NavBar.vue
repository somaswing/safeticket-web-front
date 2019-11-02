<template>
  <div class="navbar">
    <div>SafeTicket</div>
    <div></div>
    <div>Home</div>
    <div>About</div>
    <div>Team</div>
    <div>API</div>
    <div>Demo</div>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
};
</script>

<style scoped>
  .navbar {
    width: 100%;
    display: flex;
  }
  .navbar > div {
    border: 1px solid blue;
    text-align: center;
    flex-grow: 0;
    padding: 10px;
    font-size: 14px;
  }
  .navbar > div:nth-child(2) {
    flex-grow: 1;
  }
</style>
