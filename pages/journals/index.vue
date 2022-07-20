<template>
  <v-container class="demo-container">
    <v-card outlined dark>
      <v-card-title class="meka-title">工場日記</v-card-title>
      <v-divider dark></v-divider>
      <v-card-text>
        <report-card
          v-for="(journal, i) in getJournals"
          :key="i"
          :report="journal"
          :id="i"
        ></report-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import reportCard from '../../components/report-card.vue'
import { mapGetters } from 'vuex'
export default {
  components: { reportCard },
  computed: {
    ...mapGetters('home', ['getJournals']),
  },
}
</script>