<template>
  <v-container class="demo-container">
    <v-row class="ma-0 pa-0" justify="center">
      <v-col cols="10" align-self="center">
        <div class="text-extra-big text-center pattern-title">
          パターン②
        </div>
        <div class="text-medium underlined">
          {{ textGenerator(50) }}
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import textGenerator from '../../../../animations/textGenerator'
import { mapGetters } from 'vuex'
export default {
  layout: 'homepagekit-demo',
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

<style scoped>
.underlined {
  text-decoration: underline;
  line-height: 2.5;
}
</style>