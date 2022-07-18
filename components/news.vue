<template>
  <v-container class="demo-container">
    <v-card
      color="grey"
      width="100%"
    >
      <v-card-title
        class="font-weight-bold white--text text-h3"
      >{{ 'NEWS&TOPICS' }}</v-card-title>
      <v-card-text
        v-for="(item, i) in getDummy"
        :key="i"
        class="my-6"
        style="cursor: pointer"
      >
        <div class="white--text title">{{ item.title }}</div>
        <v-chip class="date" dark>{{ item.date }}</v-chip>
        <v-divider dark></v-divider>
        <div class="white--text ml-4">続きを読む</div>
      </v-card-text>
      <v-card-actions>
        <v-pagination
          v-model="page"
          total-visible="4"
          :length="4"
          dark
          color="grey"
          class="mx-auto"
        ></v-pagination>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      page: 1,
    }
  },
  computed: {
    ...mapGetters('news', ['getDummy']),
  },
}
</script>

<style scoped>
.title {
  font-size: 1.25rem;
  display: inline;
}
.date {
  display: inline;
}
</style>