<template>
  <div id="about">
    <div class="serviceInfo">
      <div>세이프 티켓 서비스</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Aut cumque enim, exercitationem explicabo ipsum labore libero maxime nisi obcaecati
        omnis perspiciatis porro quas reprehenderit repudiandae saepe ullam ut? Itaque, nemo?</div>
    </div>
    <div class="customer">
      <div>
        <div>관객</div>
        <div><img src="@/assets/img-con-1-a@2x.png" alt="img"></div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores,
          consectetur doloribus incidunt sit velit voluptates? A delectus dolores enim, incidunt,
          inventore ipsum minus nam porro quae recusandae sint totam!</div>
      </div>
      <div>
        <div>비즈니스</div>
        <div><img src="@/assets/img-con-1-b@2x.png" alt="img"></div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores,
          consectetur doloribus incidunt sit velit voluptates? A delectus dolores enim, incidunt,
          inventore ipsum minus nam porro quae recusandae sint totam!</div>
      </div>
      <div>
        <div>개발자</div>
        <div><img src="@/assets/img-con-1-c@2x.png" alt="img"></div>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores,
          consectetur doloribus incidunt sit velit voluptates? A delectus dolores enim, incidunt,
          inventore ipsum minus nam porro quae recusandae sint totam!</div>
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
    height: 95vh;
    padding: 50px 200px;
    background-image: linear-gradient(to top, #685bff, #8a33ff);
  }
  .serviceInfo {
    max-width: 760px;
    margin: 0 auto;
    padding: 20px 80px;
  }
  .serviceInfo > div {
    margin-top: 0;
    padding: 20px 0;
    color: #ffffff;
    font-size: 20px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: -0.9px;
  }
  .serviceInfo > div:first-child {
    font-size: 36px;
    font-weight: bold;
  }
  .customer {
    display: flex;
  }
  .customer > div {
    flex-grow: 1;
    margin: 0 auto;
    padding: 0 20px;
  }
  .customer > div > div:first-child {
    margin: auto;
    padding-top: 8px;
    margin-bottom: 50px;
    justify-content: center;
    vertical-align: center;
    width: 100px;
    height: 32px;
    border-radius: 22px;
    border: solid 2px #ffffff;
    color: white;
  }
  .customer > div > div:nth-child(2) {
    margin: 0 auto;
    width: 45%;
    min-height: 280px;
  }
  .customer > div > div:nth-child(2) > img {
    width: 100%;
    height: auto;
  }
  .customer > div > div:last-child {
    font-size: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.5;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
</style>
