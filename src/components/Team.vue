<template>
  <div id="team">
    <div class="title">Team</div>
    <div class="members">
      <div class="member">
        <img src="@/assets/logo.png" alt="img">
        <p class="member_name">김동준</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque blanditiis
          commodi consectetur deleniti dignissimos distinctio fugit, illo labore
          libero natus nemo officia optio pariatur possimus quam qui, voluptate. Architecto?</p>
      </div>
      <div class="member">
        <img src="@/assets/logo.png" alt="img">
        <p class="member_name">김문서</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque blanditiis
          commodi consectetur deleniti dignissimos distinctio fugit, illo labore
          libero natus nemo officia optio pariatur possimus quam qui, voluptate. Architecto?</p>
      </div>
      <div class="member">
        <img src="@/assets/logo.png" alt="img">
        <p class="member_name">오원종</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At atque blanditiis
          commodi consectetur deleniti dignissimos distinctio fugit, illo labore
          libero natus nemo officia optio pariatur possimus quam qui, voluptate. Architecto?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Team',
  data() {
    return {};
  },
};
</script>

<style scoped>
  #team {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 255, 255, 0.3);
  }
  .title {
    padding: 50px 0;
    margin: 0 auto;
    font-size: 48px;
    font-weight: bold;
  }
  .members {
    display: flex;
  }
  .member {
    flex-grow: 1;
    padding: 20px;
  }
  .member_name {
    font-size: 28px;
  }
</style>
