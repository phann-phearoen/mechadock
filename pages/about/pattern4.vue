<template>
  <div id="pattern4">
    <v-responsive
      aspect-ratio="1.774"
      :style="{
        backgroundColor: color,
        position: 'relative',
      }"
    >
      <div class="layer1">
        <v-row justify="center" style="width: 100%; height: 100%">
          <v-col align-self="center" cols="12">
            <img
              :src="require(`~/assets/homepage-kit/demo/icon.svg`)"
              style="width: 10%"
              class="d-block mx-auto"
            >
          </v-col>
        </v-row>
      </div>
      <div class="layer2">
        <v-container class="demo-container">
          <v-row justify="center">
            <v-col align-self="center" cols="12">
              <div class="text-big text-center pattern-title">
                パターン④
              </div>
              <div class="text-medium d-none d-sm-block">
                {{ textGenerator(45) }}
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-responsive>
    <div class="layer2-remains-in-xs d-block d-sm-none">
      <v-row class="pa-0 ma-0" justify="center">
        <v-col align-self="center" cols="11">
          <div class="text-medium">
            {{ textGenerator(45) }}
          </div>
        </v-col>
      </v-row>
    </div>
    <v-container id="low-section">
      <v-row
        v-for="i in 4"
        :key="i"
        :class="[
          i % 2 === 0 ? 'flip' : '',
          i === 4 ? 'my-16' : 'mt-16'
        ]"
        justify="center"
        justify-sm="start"
      >
        <v-col
          align-self="center"
          cols="11"
          sm="5"
        >
          <v-responsive
            aspect-ratio="1.5041"
            :style="{
              backgroundColor: color,
              width: '85%',
              borderRadius: '15px',
            }"
            class="mr-auto"
            :class="i % 2 === 0 ? 'flip' : ''"
          >
            <v-row
              justify="center"
              style="height: 100%; width: 100%;"
              class="pa-0 ma-0"
            >
              <v-col cols="12" align-self="center">
                <img
                  :src="require(`~/assets/homepage-kit/demo/icon.svg`)"
                  style="width: 30%;"
                  class="d-block mx-auto"
                >
              </v-col>
            </v-row>
          </v-responsive>
        </v-col>
        <v-col
          align-self="center"
          cols="11"
          sm="6"
        >
          <div :class="i % 2 === 0 ? 'flip' : ''">
            {{ textGenerator(30) }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
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
    }
  },
}
</script>

<style scoped>
.layer1 {
  position: relative;
  width: 100%;
  height: 100%;
  top: 0;
}
.layer2 {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(255, 255, 255, .3);
}
.layer2-remains-in-xs {
  background-color: rgba(255, 255, 255, .3);
}
.flip {
  transform: scaleX(-1);
}
</style>