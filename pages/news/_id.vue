<template>
  <v-container class="demo-container" style="position: relative">
    <v-card
      color="grey"
      width="100%"
      class="pt-10"
      min-height="70vh"
    >
      <v-card-title
        class="white--text text-h4"
      >{{ theNews.title }}</v-card-title>
      <v-card-text v-if="theNews?.contents" class="white--text">
        <div v-html="theNews.contents"></div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('news', ['getDummy']),
    theNews() {
      return this.getDummy[this.$route.params.id]
    },
  },
}
</script>

<style scoped>
</style>