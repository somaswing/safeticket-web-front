<template>
  <div id="table">
    <table>
      <tr v-bind:key="row.key" v-for="row in tableData">
        <td v-bind:key="data.key" v-for="data in row">{{ data }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: ['tableData'],
};
</script>

<style scoped>

</style>
