<template>
  <div id="home">
    <div class="homeText">
      <div class="headTitle">
        <p>Make Ticketing<br>Faster and Easier.</p>
      </div>
      <div class="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ad alias aliquid atque dolore eligendi exercitationemfacere
          fuga hic illum iure laborum nam perspiciatis provident</p>
      </div>
      <div>
        <button>Start Demo</button>
        <button>Go To APIs</button>
      </div>
    </div>
    <div class="homeImage"></div>
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
    display: flex;
  }
  .homeText {
    flex-grow: 1;
    background-color: lime;
  }
  .homeImage {
    flex-grow: 1;
    flex-basis: 400px;
    background-color: darkolivegreen;
    opacity: 0.3;
  }
  .headTitle {
    font-size: 40px;
    text-align: center;
    font-weight: bold;
  }
  .description {
    max-width: 400px;
    margin: 0 auto;
  }
</style>
