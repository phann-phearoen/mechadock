<template>
  <div id="pattern1" :style="{ backgroundColor: color }">
    <v-container class="demo-container">
      <v-row class="pa-0 ma-0" justify="center">
        <v-col cols="10" align-self="center">
          <div class="white--text text-extra-big text-center pattern-title">
            パターン①
          </div>
          <div class="white--text text-medium">
            {{ textGenerator(45) }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import textGenerator from '../../helper/textGenerator'
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('homepage-kit', ['color']),
  },
  methods: {
    textGenerator(freq) {
      return textGenerator.generate(freq)
    }
  },
}
</script>