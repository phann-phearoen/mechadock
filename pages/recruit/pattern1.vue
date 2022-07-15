<template>
  <div>
    <v-responsive
      aspect-ratio="1.7786"
      :style="{ backgroundColor: color }"
      width="100%"
    >
      <v-row class="pa-0 ma-0" justify="center" style="height: 100%">
        <v-col cols="12" align-self="center">
          <img
            :src="require(`~/assets/homepage-kit/demo/icon.svg`)"
            class="d-block mx-auto"
          >
        </v-col>
      </v-row>
      <div class="overlay">
        <v-container class="demo-container">
          <v-row class="ma-0 pa-0" justify="center" style="height: 100%">
            <v-col cols="12" align-self="center">
              <div class="text-big text-center pattern-title">パターン①</div>
            </v-col>
            <v-col cols="12" align-self="start">
              <div class="text-medium d-none d-sm-block">
                {{ textGenerator(75) }}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-responsive>
    <div class="overlay-text-remains d-block d-sm-none">
      <v-row class="mx-0 mt-8 pa-0" justify="center">
        <v-col cols="11" align-self="start">
          <div class="text-medium">
            {{ textGenerator(75) }}
          </div>
        </v-col>
      </v-row>
    </div>
    <v-container id="nd-section" class="py-16">
      <v-row
        v-for="i in 2"
        :key="i"
        justify="center"
        justify-sm="start"
        class="my-6 mx-0 pa-0"
      >
        <v-col
          align-self="center"
          cols="11"
          sm="5"
        >
          <v-responsive
            aspect-ratio="1.5041"
            :style="{
              backgroundColor: color,
              width: '85%',
              borderRadius: '15px',
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
        </v-col>
        <v-col
          align-self="center"
          cols="11"
          sm="5"
        >
          <div class="text-medium" style="line-height: 2">
            {{ textGenerator(40) }}
          </div>
        </v-col>
      </v-row>
    </v-container>
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
.overlay {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, .4);
}
#rd-section {
  background-color: #EEF8FB;
}
.local-container {
  max-width: 1000px !important;
  padding: 5rem 0 !important;
}
</style>