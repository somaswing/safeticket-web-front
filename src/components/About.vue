<template>
  <div id="about">
    <div class="serviceInfo">
      <p>세이프 티켓 서비스</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aut cumque enim, exercitationem explicabo ipsum labore libero maxime nisi obcaecati
        omnis perspiciatis porro quas reprehenderit repudiandae saepe ullam ut? Itaque, nemo?</p>
    </div>
    <div class="customer">
      <div>
        <p>관객</p>
        <img src="@/assets/logo.png" alt="img">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores,
          consectetur doloribus incidunt sit velit voluptates? A delectus dolores enim, incidunt,
          inventore ipsum minus nam porro quae recusandae sint totam!</p>
      </div>
      <div>
        <p>비즈니스</p>
        <img src="@/assets/logo.png" alt="img">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores,
          consectetur doloribus incidunt sit velit voluptates? A delectus dolores enim, incidunt,
          inventore ipsum minus nam porro quae recusandae sint totam!</p>
      </div>
      <div>
        <p>개발자</p>
        <img src="@/assets/logo.png" alt="img">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores,
          consectetur doloribus incidunt sit velit voluptates? A delectus dolores enim, incidunt,
          inventore ipsum minus nam porro quae recusandae sint totam!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      msg: 'This is an about component',
    };
  },
};
</script>

<style scoped>
  #about {
    max-width: 100%;
    height: 100vh;
    background-color: rgba(255,0,255,0.3);
    padding: 30px 100px;
  }
  .serviceInfo {
    margin: 0 auto;
    padding: 0 80px;
  }
  .serviceInfo > p {
    margin-top: 0;
    padding: 20px 0;
  }
  .serviceInfo > p:first-child {
    font-size: 40px;
  }
  .customer {
    display: flex;
  }
  .customer > div {
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 20px;
  }
  .customer > div > img {
    width: 60%;
    height: auto;
  }
</style>
