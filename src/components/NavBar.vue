<template>
  <div class="navbar">
    <div><router-link :to="{ path: '/' }">SafeTicket</router-link></div>
    <div></div>
    <div><router-link :to="{ path: '/' }">Home</router-link></div>
    <div><router-link :to="{ path: '/#about' }">About</router-link></div>
    <div><router-link :to="{ path: '/#tech' }">Tech</router-link></div>
    <div><router-link :to="{ path: '/#team' }">Team</router-link></div>
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
    height: 80px;
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
    font-size: 16px;
    font-weight: bold;
    color: black;
    margin: auto;
  }
  .navbar > div:first-child {
    font-size: 24px;
    font-weight: bold;
    margin-left: 100px;
  }
  .navbar > div:nth-child(2) {
    flex-grow: 1;
  }
  .navbar > div:last-child {
    margin-right: 100px;
  }
  a {
    text-decoration: none;
  }
</style>
