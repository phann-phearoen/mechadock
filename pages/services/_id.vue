<template>
  <v-container class="demo-container">
    <v-card color="grey" width="100%" min-height="80vh">
      <v-card-title class="white--text">
        {{ theService.title }}
      </v-card-title>
      <v-divider dark></v-divider>
      <v-card-text>
        <div v-html="theService.contents"></div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('home', ['getServices']),
    theService() {
      return this.getServices[this.$route.params.id]
    },
  },
}
</script>