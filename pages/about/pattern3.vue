<template>
  <div id="pattern3" :style="{ backgroundColor: color }">
    <v-container class="demo-container">
      <v-row class="ma-0 pa-0" justify="center">
        <v-col sm="6" cols="12" align-self="center">
          <img
            :src="require(`~/assets/homepage-kit/demo/icon.svg`)"
            style="width: 30%"
            class="d-block mx-auto"
          >
        </v-col>
        <v-col sm="6" cols="10" align-self="center">
          <div class="text-big white--text mb-16">パッターン③</div>
          <div class="white--text text-medium">
            {{ textGenerator(50) }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
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

<style scoped>
#pattern3 {
  opacity: .7;
}
</style>