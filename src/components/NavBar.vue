<template>
  <div class="navbar">
    <div><router-link :to="{ path: '/' }">SafeTicket</router-link></div>
    <div></div>
    <div><router-link :to="{ path: '/' }">Home</router-link></div>
    <div>About</div>
    <div>Team</div>
    <div><router-link :to="{ path: '/api' }">API</router-link></div>
    <div><router-link :to="{ path: '/demo' }">Demo</router-link></div>
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
    overflow: hidden;
    background-color: white;
    position: fixed;
    z-index: 100;
  }
  .navbar > div {
    text-align: center;
    flex-grow: 0;
    padding: 10px;
    font-size: 14px;
    color: black;
  }
  .navbar > div:nth-child(2) {
    flex-grow: 1;
  }
  a {
    text-decoration: none;
  }
</style>
