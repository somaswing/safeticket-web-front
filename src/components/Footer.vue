<template>
    <div id="footer">
      <div>
        <p>Safe Ticket</p>
        <p>2019 SafeTicket Co,Ltd All rights Reserved</p>
      </div>
      <div>
        <p>Contact Us</p>
        <p>소프트웨어 마에스트로</p>
        <p>서울 강남구 테헤란로 311 아남타워 7층</p>
        <p>jgyuity1289@gmail.com</p>
        <p>010.4178.1136</p>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
  #footer {
    max-width: 100%;
    min-height: 200px;
    background-color: #333333;
    color: #ffffff;
    display: flex;
    padding: 20px;
  }
  #footer > div {
    flex-grow: 1;
    padding: 10px;
  }
  #footer > div:first-child {
    text-align: left;
  }
  #footer > div:nth-child(2) {
    text-align: right;
  }
</style>
