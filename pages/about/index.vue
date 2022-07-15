<template>
  <div>
    <div
      id="top"
      :style="{ backgroundColor: color }"
    >
      <v-row id="back-layer" justify="center" style="height: 100%">
        <v-col cols="8" offset="4" align-self="center">
          <img
            :src="require(`~/assets/homepage-kit/demo/icon.svg`)"
            class="d-block mx-auto"
            width="15%"
          >
        </v-col>
      </v-row>
      <div id="overlay">
        <about-title
          id="title"
          :fill="color"
          :bg="'none'"
        ></about-title>
      </div>
    </div>
    <about-text></about-text>
    <about-options></about-options>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import AboutTitle from '../../../../components/homepage-kit/demo/logos/about.vue'
import { gsap } from 'gsap'
import AboutText from '../../../../components/homepage-kit/demo/about/about-text.vue'
import AboutOptions from '../../../../components/homepage-kit/demo/about/options.vue'
export default {
  layout: 'homepagekit-demo',
  components: {
    AboutTitle,
    AboutText,
    AboutOptions,
  },
  computed: {
    ...mapGetters('homepage-kit', ['color'])
  },
  mounted() {
    const tl = gsap.timeline()
    tl.to('#overlay', {
      width: '40%',
      top: '35%',
      paddingTop: '12.5%',
      borderBottomRightRadius: '1.5vw',
      borderTopRightRadius: '1.5vw',
      duration: 1,
    }, 0)
    tl.to('#title', {
      width: '75%',
      top: '15%',
      left: '30%',
      duration: 1,
    }, 0)
  },
}
</script>

<style scoped>
#top {
  padding-top: 56.36%;
  width: 100vw;
  opacity: .7;
  position: relative;
}
#back-layer {
  width: 100%;
  height: 100%;
  opacity: .7;
  position: absolute;
  top: 0;
}
#overlay {
  width: 100vw;
  padding-top: 56.36%;
  background-color: white;
  position: absolute;
  top: 0;
  opacity: .5;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-content: center;
}
#title {
  position: absolute;
  display: block;
  top: 40%;
  left: 40%;
}
</style>