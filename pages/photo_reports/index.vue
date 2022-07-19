<template>
  <v-container class="demo-container">
    <v-card dark outlined>
      <v-card-title class="meka-title">
        フォトレポート
      </v-card-title>
      <v-divider dark></v-divider>
      <v-card-text>
        <report-card
          v-for="(report, i) in getReports"
          :key="i"
          :report="report"
          :id="i"
        ></report-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import reportCard from '../../components/report-card.vue'
export default {
  components: { reportCard },
  computed: {
    ...mapGetters('home', ['getReports']),
  },
}
</script>