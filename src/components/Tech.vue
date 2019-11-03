<template>
  <div id="tech">
    <div class="blockchain">
      <div class="tech_image">
        <img src="@/assets/logo.png" alt="img">
      </div>
      <div class="explain">
        <div class="tech_title">BlockChain</div>
        <div class="tech_explain">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ab accusantium ad at corporis, culpa cumque, dolore et harum hic in ipsam magnam
          maxime numquam possimus quas quisquam sit. Magni, vitae.</div>
      </div>
    </div>
    <div class="did">
      <div class="explain">
        <div class="tech_title">Distrubuted ID</div>
        <div class="tech_explain">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Ab accusantium ad at corporis, culpa cumque, dolore et harum hic in ipsam magnam
          maxime numquam possimus quas quisquam sit. Magni, vitae.</div>
      </div>
      <div class="tech_image">
        <img src="@/assets/logo.png" alt="img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tech',
  data() {
    return {};
  },
};
</script>

<style scoped>
  #tech {
    width: 100%;
    height: 100vh;
    background-color: rgba(128, 0, 128, 0.3);
  }
  #tech > div {
    display: flex;
    padding: 10px 30px;
  }
  .tech_image {
    min-width: 300px;
  }
  img {
    width: 100%;
    height: auto;
  }
  .explain {
    padding: 30px;
  }
  .explain > div {
    padding: 20px 0;
  }
  .tech_title {
    font-size: 48px;
  }
  .tech_explain {
    font-size: 24px;
  }
</style>
