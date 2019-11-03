<template>
  <div id="demo">
    <h2>{{ msg }}</h2>
    <QRCode/>
  </div>
</template>

<script>
import QRCode from './QRcode';

export default {
  name: 'Demo',
  components: { QRCode },
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
    background-color: rgba(255,127,80,0.3);
  }
</style>
