<template>
  <div
    id="about-text"
    :style="{ backgroundColor: color }"
  >
    <v-container style="height: 100%">
      <v-row justify="center" style="height: 100%;">
        <v-col cols="12" align-self="center">
          <div
            class="text-big white--text text-center"
            style="margin-bottom: 10%"
          >
            {{ textGenerator(3) }}
          </div>
          <div class="text-medium white--text">
            {{ textGenerator(40) }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('homepage-kit', ['color']),
  },
  methods: {
    textGenerator(num) {
      let text = ''
      while (num > 0) {
        text += 'テキスト'
        num--
      }
      return text
    }, 
  },
}
</script>

<style scoped>
#about-text {
  padding: 10rem 0;
  width: 100%;
}
</style>