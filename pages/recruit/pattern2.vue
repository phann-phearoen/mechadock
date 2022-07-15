<template>
  <div>
    <v-responsive
      aspect-ratio="1.7786"
      :style="{
        backgroundColor: color,
        opacity: .7,
      }"
      width="100%"
    >
      <v-container class="demo-container" style="height: 100%">
        <v-row
          class="ma-0 pa-0"
          justify="center"
          justify-sm="start" 
          style="height: 100%"
        >
          <v-col align-self="center" cols="12" sm="5">
            <img
              :src="require(`~/assets/homepage-kit/demo/icon.svg`)"
              class="d-block mx-auto"
            >
          </v-col>
          <v-col align-self="center" cols="11" sm="6">
            <div class="white--text text-big mb-12">
              パターン②
            </div>
            <div class="white--text text-medium" style="line-height: 2">
              {{ textGenerator(80) }}
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-responsive>
    <div id="rd-section">
      <recruit-title :title="'テキスト'"></recruit-title>
      <v-container class="local-container">
        <v-row class="ma-0 pa-0" justify="center">
          <v-col
            v-for="j in 4"
            :key="j"
            cols="10"
            sm="6"
          >
            <recruit-square-card></recruit-square-card>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="4th-section">
      <recruit-title :title="'テキスト'"></recruit-title>
      <v-container class="local-container">
        <qna v-for="i in 4" :key="i"></qna>
      </v-container>
    </div>
    <div id="contact-section">
      <recruit-title :title="'テキスト'"></recruit-title>
      <v-container class="local-container">
        <contact></contact>
      </v-container>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import textGenerator from '../../helper/textGenerator'
import RecruitTitle from '../../components/recruit/recruit-title.vue'
import RecruitSquareCard from '../../components/recruit/recruit-square-card.vue'
import Qna from '../../components/recruit/qna.vue'
import Contact from '../../components/recruit/contact.vue'
export default {
  components: {
    RecruitTitle,
    RecruitSquareCard,
    Qna,
    Contact,
  },
  computed: {
    ...mapGetters('homepage-kit', ['color']),
  },
  methods: {
    textGenerator(freq) {
      return textGenerator.generate(freq)
    },
  },
}
</script>

<style scoped>
#rd-section {
  background-color: #EEF8FB;
}
.local-container {
  max-width: 1000px !important;
  padding: 5rem 0 !important;
}
</style>