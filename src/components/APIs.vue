<template>
  <div id="apis">
    <p>API</p>
    <p>SafeTicket API는 SafeTicket 서비스에서 제공하는 API를 의미합니다. 티켓 구매 플랫폼에서 사용할 수 있는 API입니다.
      SafeTicket 티켓 지갑을 사용하는 티켓 구매자는 티켓 구매 플랫폼에서 결제시 safeticket 티켓 지갑에 티켓을 등록, 삭제할
      수 있습니다. SafeTicket 서비스와 계약한 티켓 구매 플랫폼에서만 사용할 수 있습니다.</p>
    <div class="target">
      <div class="smartphone">
        <div><img src="@/assets/api-img-01@2x.png" alt=""></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate eveniet ut!</p>
      </div>
      <div class="ticket">
        <div><img src="@/assets/api-img-02@2x.png" alt=""></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus delectus.</p>
      </div>
    </div>
    <EachAPI :parentData="ticketRegister"></EachAPI>
    <EachAPI :parentData="ticketCancel"></EachAPI>
  </div>

</template>

<script>
import EachAPI from './EachAPI';

export default {
  name: 'APIs',
  components: { EachAPI },
  data() {
    return {
      ticketRegister: {
        api_name: '티켓 등록',
        api_explain: 'SafeTicket 티켓등록은 티켓 구매 플랫폼에서 결제가 끝났을 때 결제정보를 입력받아 티켓지갑에 등록하는 기능입니다. 해당 기능을 사용하기 위해서는 티켓 구매 플랫폼 토큰이 필요합니다.',
        req_code: 'POST /ticket\n' +
          'Host : 52.79.252.71',
        req_explain: '바디에 아래 값을 필수로 추가하고 POST로 요청합니다. ',
        req_table: [
          {
            key: 'authorization',
            explain: '플랫폼 고유 토큰',
            type: 'String',
          },
          {
            key: 'attendee_id',
            explain: 'SafeTicket 서비스 사용자 ID',
            type: 'String',
          },
          {
            key: 'venue',
            explain: '장소',
            type: 'String',
          },
          {
            key: 'event_name',
            explain: '공연 이름',
            type: 'String',
          },
          {
            key: 'event_date',
            explain: '공연 날짜',
            type: 'String',
          },
          {
            key: 'event_time',
            explain: '공연 시간',
            type: 'String',
          },
          {
            key: 'payment_time',
            explain: '결제 시간(년월일시분초) ex)20191114021853',
            type: 'String',
          },
          {
            key: 'ticket_issuer',
            explain: '티켓 구매 플랫폼 이름',
            type: 'String',
          },
        ],
        req_comment: 'payment_time 의 값은 년월일시분초인 14자리 숫자로 입력해야 합니다.',
        res_code: '',
        res_explain: '응답 바디는 JSON 객체로 아래 값들을 포함합니다.',
        res_table: [
          {
            key: 'result',
            explain: '요청 성공 여부',
            type: 'Boolean',
          },
          {
            key: 'msg',
            explain: '요청에 대한 응답 메시지',
            type: 'String',
          },
        ],
        res_comment: '',
      },
      ticketCancel: {
        api_name: '티켓 취소',
        api_explain: 'SafeTicket 티켓취소는 티켓 구매 플랫폼에서 티켓을 취소할 때 결제했을 때의 정보를 입력받아 티켓지갑에 등록하는 기능입니다. 해당 기능을 사용하기 위해서는 티켓 구매 플랫폼 토큰이 필요합니다.',
        req_code: 'POST /deletion\n' +
          'Host : 52.79.252.71',
        req_explain: '바디에 아래 값을 필수로 추가하고 POST로 요청합니다. ',
        req_table: [
          {
            key: 'authorization',
            explain: '플랫폼 고유 토큰',
            type: 'String',
          },
          {
            key: 'attendee_id',
            explain: 'SafeTicket 서비스 사용자 ID',
            type: 'String',
          },
          {
            key: 'payment_time',
            explain: '결제 시간(년월일시분초) ex)20191114021853',
            type: 'String',
          },
        ],
        req_comment: 'payment_time 의 값은 년월일시분초인 14자리 숫자로 입력해야 합니다.',
        res_code: '',
        res_explain: '응답 바디는 JSON 객체로 아래 값들을 포함합니다.',
        res_table: [
          {
            key: 'result',
            explain: '요청 성공 여부',
            type: 'Boolean',
          },
          {
            key: 'msg',
            explain: '요청에 대한 응답 메시지',
            type: 'String',
          },
        ],
        res_comment: '',
      },
    };
  },
};
</script>

<style scoped>
  #apis {
    max-width: 100%;
    background-image: url("../assets/img-bg-01@2x.png");
    background-size: cover;
    background-repeat: no-repeat;
    padding: 0 150px;
  }
  #apis > p:first-child {
    font-size: 54px;
    font-weight: 900;
    text-align: left;
    color: #825eeb;
  }

  #apis > p:nth-child(2) {
    font-size: 22px;
    font-weight: 300;
    text-align: left;
    color: #222222;
  }
  .target {
    display: flex;
  }
  .target > div {
    width: 50%;
    margin: 50px;
    padding: 80px 20px 20px;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  }
  .target > div > div {
    width: 300px;
    height: 240px;
    margin: auto;
  }
  .smartphone > div > img {
    width: 70%;
  }
  .ticket > div > img {
    width: 90%;
  }
</style>
