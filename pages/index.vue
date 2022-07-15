<template>
  <div
    id="top"
    :style="{ backgroundColor: color }"
  >
    <v-row class="pa-0 ma-0" justify="center" style="height: 100%">
      <v-col cols="12" align-self="center">
        <img
          :src="require(`~/assets/homepage-kit/demo/icon.svg`)"
          class="d-block mx-auto"
        >
        <div class="text-h5 white--text text-center mt-12">
          テキストテキストテキストテキスト<br>
          テキストテキストテキストテキストテキストテキスト
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  layout: 'homepagekit-demo',
  data() {
    return {
      colorPicker: false,
      localColor: null,
    }
  },
  computed: {
    ...mapGetters('homepage-kit', ['color']),
  },
}
</script>

<style scoped>
#top {
  height: 100vh;
  opacity: .7;
}
</style>