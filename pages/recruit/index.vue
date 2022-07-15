<template>
  <div style="position: relative">
    <div
      id="recruit"
      :style="{ backgroundColor: color }"
    >
      <v-row
        class="back-layer"
        justify="center"
      >
        <v-col cols="8" offset="4" align-self="center">
          <img
            :src="require(`~/assets/homepage-kit/demo/icon.svg`)"
            class="d-block mx-auto"
            width="15%"
          >
        </v-col>
      </v-row>
      <div id="overlay"></div>
      <recruit-title class="title" :fill="color" :bg="'none'"></recruit-title>
    </div>
    <v-container
      style="
        max-width: 1000px !important;
        padding: 2rem 0 !important;
      "
    >
      <v-row class="pa-0 ma-0" justify="center">
        <v-col
          v-for="(option, i) in options"
          :key="i"
          sm="4"
          cols="8"
          align-self="center"
        >
          <recruit-card :option="option"></recruit-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { gsap } from 'gsap'
import RecruitTitle from '../../components/logos/recruit.vue'
import RecruitCard from '../../components/recruit/recruit-card.vue'
export default {
  components: {
    RecruitTitle,
    RecruitCard,
  },
  data() {
    return {
      options: [
        {
          text: 'パターン①',
          route: '/homepage-kit/demo/recruit/pattern1',
        },
        {
          text: 'パターン②',
          route: '/homepage-kit/demo/recruit/pattern2',
        },
        {
          text: 'パターン③',
          route: '/homepage-kit/demo/recruit/pattern3',
        },
      ],
    }
  },
  computed: {
    ...mapGetters('homepage-kit', ['color'])
  },
  mounted() {
    const tl = gsap.timeline()
    tl.to('#recruit', {
      paddingTop: '30%',
      duration: 1,
    }, 0)
    tl.to('#overlay', {
      width: '40%',
      top: '30%',
      paddingTop: '12.5%',
      borderBottomRightRadius: '1.5vw',
      borderTopRightRadius: '1.5vw',
      duration: 1,
    }, 0)
    tl.to('.title', {
      marginLeft: '15%',
      top: '35%',
      duration: 1,
    }, 0)
  },
}
</script>

<style scoped>
#recruit {
  padding-top: 52%;
  width: 100vw;
  opacity: .8;
  position: relative;
}
.back-layer {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
#overlay {
  width: 100%;
  padding-top: 52%;
  background-color: white;
  position: absolute;
  top: 0;
  left: 0;
  opacity: .7;
  z-index: 10;
}
.title {
  position: absolute;
  display: block;
  margin-left: 20%;
  width: 25%;
  top: 41%;
  z-index: 11;
}
</style>