<template>
  <div>
    <qrcode-vue :value="value" :size="size" level="H"></qrcode-vue>
  </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue';

export default {
  data() {
    return {
      value: "{'token':'$2b$12$lE.8WOd7SlrLNuK2hrnp3uginBvvsGExazM96TBWNdaxxSJg1jV8', 'email':'safeticket@saficket.com', 'venue': 'Olympic Stadium', 'event_name': 'ILOVEIU', 'event_date': '20191130', 'event_time': '19:00', 'payment_time': '20191121130513', 'ticket_issuer': 'interpark'}",
      size: 300,
    };
  },
  components: {
    QrcodeVue,
  },
};
</script>
