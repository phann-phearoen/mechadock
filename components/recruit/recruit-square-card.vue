<template>
  <v-responsive
    aspect-ratio="1"
    width="100%"
    style="
      background-color: white;
      border-radius: 15px;
    "
  >
    <v-row justify="center">
      <v-col cols="12" align-self="center">
        <div class="text-center mt-6 font-weight-bold">
          {{ textGenerator(4) }}
        </div>
      </v-col>
      <v-col cols="12" align-self="center">
        <v-responsive
          aspect-ratio="1"
          :style="{
            backgroundColor: color,
            opacity: .7,
          }"
          width="40%"
          class="mx-auto my-5"
        >
          <v-row class="ma-0 pa-0" justify="center" style="height: 100%">
            <v-col cols="12" align-self="center">
              <div class="text-center text-h3 white--text">
                icon
              </div>
            </v-col>
          </v-row>
        </v-responsive>
      </v-col>
      <v-col cols="12" align-self="start">
        <div class="text-caption mx-10 mb-4">
          {{ textGenerator(40) }}
        </div>
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script>
import { mapGetters } from 'vuex'
import textGenerator from '../../helper/textGenerator'
export default {
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