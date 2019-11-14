<template>
  <div id="eachapi">
    <div class="api_name">{{ parentData.api_name }}</div>
    <div class="api_explain">{{ parentData.api_explain }}</div>
    <div class="request">
      <p>[Request]</p>
      <div class="req_code">{{ parentData.req_code }}</div>
      <div class="req_explain">{{ parentData.req_explain }}</div>
      <div class="req_table"><Table :tableData="parentData.req_table"></Table></div>
      <div class="req_comment">{{ parentData.req_comment }}</div>
    </div>
    <div class="response">
      <p>[Response]</p>
      <div class="res_code">{{ parentData.res_code }}</div>
      <div class="res_explain">{{ parentData.res_explain }}</div>
      <div class="res_table"><Table :tableData="parentData.res_table"></Table></div>
      <div class="res_comment">{{ parentData.res_comment }}</div>
    </div>
  </div>
</template>

<script>
import Table from '@/components/Table';

export default {
  name: 'EachAPI',
  props: ['parentData'],
  components: { Table },
};
</script>

<style scoped>
#eachapi {
  max-width: 100%;
  border: 1px solid gray;
  padding: 50px;
  margin: 20px auto;
}
</style>
