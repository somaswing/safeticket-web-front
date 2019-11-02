<template>
  <div id="app">
    <div id="header">
      <NavBar/>
    </div>
    <div id="container">
      <router-view/>
    </div>
    <div id="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: { NavBar, Footer },
};
</script>

<style>
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #container {
    padding-top: 40px;
  }
</style>
