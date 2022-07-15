<template>
  <v-container id="pattern6" class="demo-container">
    <v-row class="pa-0 ma-0" justify="center">
      <v-col align-self="center" cols="12">
        <div class="text-h4 text-center">
          パターン⑥
        </div>
      </v-col>
      <v-col align-self="center" cols="12">
        <v-row
          v-for="i in 2"
          :key="i"
          justify="center"
          class="my-6"
        >
          <v-col cols="10" sm="3" align-self="center">
            <v-responsive
              aspect-ratio="1"
              width="100%"
              class="mx-auto"
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
          </v-col>
          <v-col cols="11" sm="9" align-self="center">
            <div class="underlined">
              {{ textGenerator(56) }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
import textGenerator from '../../../../animations/textGenerator'
export default {
  layout: 'homepagekit-demo',
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
.underlined {
  text-decoration: underline;
  line-height: 2.5;
}
</style>