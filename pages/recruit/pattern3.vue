<template>
  <div>
    <v-container class="demo-container">
      <v-row class="ma-0 pa-0" justify="center">
        <v-col cols="12" align-self="center">
          <div class="text-big text-center mb-10">
            パターン③
          </div>
        </v-col>
        <v-col
          v-for="i in 3"
          :key="i"
          align-self="center"
          sm="4"
          cols="8"
        >
          <v-responsive
            aspect-ratio="1"
            width="80%"
            class="mx-auto rounded-circle"
            :style="{
              backgroundColor: color,
              opacity: .8,
            }"
          >
            <v-row
              class="pa-0 ma-0"
              justify="center"
              style="height: 100%"
            >
              <v-col cols="12" align-self="center">
                <img
                  :src="require(`~/assets/homepage-kit/demo/icon.svg`)"
                  style="width: 30%"
                  class="d-block mx-auto"
                >
              </v-col>
            </v-row>
          </v-responsive>
          <div class="mt-10">
            {{ textGenerator(7) }}
          </div>
        </v-col>
      </v-row>
    </v-container>
    <div
      id="nd-section"
      :style="{ backgroundColor: '#EEF3FB' }"
    >
      <v-container class="py-16">
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
            <div style="line-height: 2">
              {{ textGenerator(40) }}
            </div>
          </v-col>
        </v-row>
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
import textGenerator from '../../../../animations/textGenerator'
import RecruitTitle from '../../../../components/homepage-kit/demo/recruit/recruit-title.vue'
import Contact from '../../../../components/homepage-kit/demo/recruit/contact.vue'
export default {
  layout: 'homepagekit-demo',
  components: { RecruitTitle, Contact, },
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
.local-container {
  max-width: 1000px !important;
  padding: 5rem 0 !important;
}
</style>