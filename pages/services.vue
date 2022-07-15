<template>
  <div>
    <div
      id="services"
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
        <services-title
          id="title"
          :fill="color"
          :bg="'none'"
        ></services-title>
      </div>
    </div>
    <v-container class="demo-container">
      <v-row class="ma-0 pa-0" justify="center">
        <v-col align-self="center" cols="12" class="mb-12">
          <div
            class="text-extra-big text-center font-weight-bold"
            :style="{ color: color, opacity: .7 }"
          >
            {{ textGenerator(3) }}
          </div>
        </v-col>
        <v-col
          v-for="i in 6"
          :key="i"
          cols="12"
          sm="6"
          style="cursor: pointer"
        >
          <v-responsive
            aspect-ratio="2.812182"
            width="100%"
            :style="{ backgroundColor: color }"
          >
            <v-row
              class="pa-0 ma-0"
              justify="center"
              style="height: 100%"
            >
              <v-col cols="8" align-self="center">
                <div class="white--text text-medium text-center">
                  {{ textGenerator(3) }}
                </div>
              </v-col>
              <v-col cols="4" align-self="center">
                <img
                  :src="require(`~/assets/homepage-kit/demo/icon.svg`)"
                  style="width: 60%"
                  class="d-block mx-auto"
                >
              </v-col>
            </v-row>
          </v-responsive>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ServicesTitle from '../../../components/homepage-kit/demo/logos/services.vue'
import textGenerator from '../../../animations/textGenerator'
import { gsap } from 'gsap'
export default {
  components: {
    ServicesTitle,
  },
  computed: {
    ...mapGetters('homepage-kit', ['color'])
  },
  methods: {
    textGenerator(freq) {
      return textGenerator.generate(freq)
    },
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
#services {
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