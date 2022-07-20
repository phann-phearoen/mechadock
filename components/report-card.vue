<template>
  <v-row
    class="mx-0 my-2 pa-0 report-card"
    @click="openReport"
  >
    <v-col cols="2">
      <v-img
        :src="report.img"
        width="90%"
        aspect-ratio="1"
        class="d-block mx-auto rounded"
      ></v-img>
    </v-col>
    <v-col align-self="center">
      <div class="text-big">
        {{ report.title }}
      </div>
      <div>
        {{ report.lead }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['report', 'id'],
  methods: {
    openReport() {
      alert('未作業。現サイトのデータがぐちゃぐちゃですから。作業後はサービスメニューの各サービスなど同様です。')
    },
  },
}
</script>

<style scoped>
.report-card {
  cursor: pointer;
  border: 1px solid grey;
  border-radius: 10px;
}
.text-big {
  color: orange;
}
</style>