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
      value: "{'attendee_id':'abc123','event_name':'IU콘서트'}",
      size: 300,
    };
  },
  components: {
    QrcodeVue,
  },
};
</script>
