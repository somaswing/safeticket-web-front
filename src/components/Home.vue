<template>
  <div id="home">
    <div class="homeText">
      <div class="headTitle">
        <p style="color: #825eeb; margin-bottom: 0;">Make Ticketing</p>
        <p style="margin-top: 0;">Faster and Easier.</p>
      </div>
      <div class="description">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ad alias aliquid atque dolore eligendi exercitationemfacere
          fuga hic illum iure laborum nam perspiciatis provident</p>
      </div>
      <div class="buttons">
        <button class="demo"><router-link :to="{ path: '/demo' }">Start Demo</router-link></button>
        <button class="api"><router-link :to="{ path: '/api' }">Go To APIs</router-link></button>
      </div>
    </div>
    <div class="homeImage">
      <img src="../assets/img-banner@2x.png" alt="">
    </div>
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
  a {
    text-decoration: none;
  }
  #home {
    max-width: 100%;
    height: 95vh;
    display: flex;
    padding: 20px;
    background-image: url("../assets/img-bg-01@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .homeText {
    flex-grow: 1;
    margin-top: 150px;
  }
  .homeImage {
    flex-grow: 1;
    flex-basis: 500px;
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
  .buttons {
    margin-top: 50px;
  }
  .buttons > button {
    outline: none;
  }
  .buttons > button > a {
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.75;
    letter-spacing: normal;
  }
  img {
    width: 80%;
    max-width: 700px;
    margin-top: 120px;
    margin-right: 120px;
  }
  .demo {
    width: 180px;
    height: 54px;
    border-radius: 27px;
    box-shadow: 0px 6px 16px 0 rgba(105, 76, 200, 0.3);
    background-image: linear-gradient(to right, #825eeb, #6887f7);
  }
  .demo > a {
    color: #ffffff;
  }
  .api {
    width: 180px;
    height: 54px;
    border-radius: 27px;
    box-shadow: 0px 8px 16px 0 rgba(48, 108, 255, 0.25);
    border: solid 2px #825eeb;
    background-color: #ffffff;
  }
  .api > a {
    color: #825eeb;
  }
</style>
