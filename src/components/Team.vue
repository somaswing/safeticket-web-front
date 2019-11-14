<template>
  <div id="team">
    <div class="title">Team</div>
    <div class="members">
      <div class="member">
        <img src="@/assets/img-profile-1@2x.png" alt="img">
        <p class="member_name">김동준 <span>팀장</span></p>
        <div class="description">
          <p>백엔드 및 <br>모바일 어플리케이션 개발</p>
          <p>Java, C++, Javascript</p>
          <p>감정인식 알고리즘을 통한 액자 어플리케이션 청각장애인을 위한 홈 IoT 개발 경험</p>
        </div>
      </div>
      <div class="member">
        <img src="@/assets/img-profile-2@2x.png" alt="img">
        <p class="member_name">김문서 <span>팀원</span></p>
        <div class="description">
          <p>블록체인 네트워크 및 <br>모바일 어플리케이션 개발</p>
          <p>C++, Java, Node.js</p>
          <p class="small">블록체인을 활용한 교내 전자 투표 및 설문조사 시스템 개발 경험</p>
          <p class="small">머신러닝을 이용한 사용자 음성 감정 분석 시스템 개발 경험</p>
        </div>
      </div>
      <div class="member">
        <img src="@/assets/img-profile-3@2x.png" alt="img">
        <p class="member_name">오원종 <span>팀원</span></p>
        <div class="description">
          <p>웹 프론트엔드 및 <br>블록체인 체인코드 개발</p>
          <p>Java, JavaScript, Go</p>
          <p>(주)아우름플래닛에서 LINER 서비스 웹프론트엔드 개발 인턴</p>
        </div>
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
    max-width: 100%;
    height: 100vh;
    background-color: #fafafa;
    padding: 0 200px;
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
    width: 33%;
    margin: 0 20px;
    padding: 30px;
    height: 531px;
    border-radius: 4px;
    background-color: #ffffff;
  }
  .member_name {
    font-size: 24px;
    font-weight: bold;
  }
  .member_name > span {
    font-size: 20px;
    font-weight: bold;
    color: #909090;
  }
  .description {
    background-color: #fafafa;
    font-size: 16px;
    padding: 20px;
    height: 200px;
  }
  .description > p.small {
    font-size: 12px;
  }
  img {
    width: 80%;
  }
</style>
