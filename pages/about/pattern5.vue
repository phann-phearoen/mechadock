<template>
  <v-container class="demo-container">
    <v-row class="ma-0 pa-0" justify="center">
      <v-col cols="12" align-self="center">
        <div class="text-h4 text-center mb-10">
          パターン⑤
        </div>
      </v-col>
      <v-col
        v-for="i in 3"
        :key="i"
        align-self="center"
        sm="4"
        cols="10"
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
          {{ textGenerator(15) }}
        </div>
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