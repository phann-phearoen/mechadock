<template>
  <v-responsive
    aspect-ratio="1"
    class="rounded-circle mx-auto"
    width="85%"
    :style="{
      backgroundColor: color,
      position: 'relative',
      cursor: 'pointer',
    }"
    @mouseenter="hoverOnCircle"
    @mouseleave="leaveCircle"
    @click="goTo"
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
    <v-responsive
      aspect-ratio="1"
      class="rounded-circle circle-layer"
      width="95%"
      :class="[
        increaseOpacity ? 'high-opacity' : 'low-opacity',
      ]"
    >
      <v-row
        justify="center"
        class="pa-0 ma-0"
        style="height: 100%"
      >
        <v-col cols="12" align-self="end">
          <div
            :style="{ color: color }"
            class="text-center text-h5"
          >{{ option.text }}</div>
        </v-col>
        <v-col cols="12" align-self="start">
          <div
            :style="{
              backgroundColor: color,
              width: 'fit-content',
            }"
            class="d-block mx-auto rounded-circle"
          >
            <v-icon color="white">mdi-chevron-right</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-responsive>
  </v-responsive>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['option'],
  data() {
    return {
      increaseOpacity: false,
    }
  },
  computed: {
    ...mapGetters('homepage-kit', ['color'])
  },
  methods: {
    hoverOnCircle() {
      this.increaseOpacity = true
    },
    leaveCircle() {
      this.increaseOpacity = false
    },
    goTo() {
      this.$router.push(this.option.route)
    },
  },
}
</script>

<style scoped>
.circle-layer {
  position: absolute;
  top: 2.5%;
  left: 2.5%;
  background-color: white;
}
.low-opacity {
  opacity: .3;
}
.high-opacity {
  opacity: .8;
}
</style>