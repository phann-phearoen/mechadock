<template>
  <v-card
    width="100%"
    rounded="lg"
    style="cursor: pointer"
    @click="viewNews()"
  >
    <v-responsive
      aspect-ratio="1.82"
      :style="{
        backgroundColor: color,
        width: '100%',
        opacity: .7,
      }"
      class="mr-auto"
    >
      <v-row
        justify="center"
        style="height: 100%; width: 100%;"
        class="pa-0 ma-0"
      >
        <v-col cols="12" align-self="center">
          <img
            :src="require(`~/assets/homepage-kit/demo/icon.svg`)"
            style="width: 30%;"
            class="d-block mx-auto"
          >
        </v-col>
      </v-row>
    </v-responsive>
    <v-card-actions>
      <v-chip small class="d-block">{{ item.date }}</v-chip>
      <v-spacer></v-spacer>
      <v-chip :color="item.theme" dark class="d-block" small>{{ item.cat }}</v-chip>
    </v-card-actions>
    <v-card-text>
      <div class="font-weight-bold">{{ item.title }}</div>
      <div>{{ item.text }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['item', 'id'],
  computed: {
    ...mapGetters('homepage-kit', ['color']),
  },
  methods: {
    viewNews() {
      this.$store.commit('news/set_dummy', this.item)
      this.$router.push(`/news/${this.id}`)
    },
  },
}
</script>