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
      <news-title class="title" :fill="color" :bg="'none'"></news-title>
    </div>
    <v-container
      style="
        max-width: 1000px !important;
        padding: 2rem 0 !important;
      "
    >
      <v-row class="ma-0 pa-0" justify="center">
        <v-col
          v-for="(item, i) in news"
          :key="i"
          sm="4"
          cols="11"
          align-self="center"
        >
          <news-card :item="item" :id="i"></news-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { gsap } from 'gsap'
import NewsTitle from '../../components/logos/news.vue'
import NewsCard from '../../components/news/card.vue'
import textGenerator from '../../helper/textGenerator'
export default {
  components: {
    NewsTitle,
    NewsCard,
  },
  computed: {
    ...mapGetters('homepage-kit', ['color']),
    news() {
      return [
        {
          date: new Date().toISOString().slice(0, 10),
          title: this.textGenerator(3),
          text: this.textGenerator(15),
          theme: '#335A9F',
          cat: 'テキスト',
        },
        {
          date: new Date().toISOString().slice(0, 10),
          title: this.textGenerator(3),
          text: this.textGenerator(15),
          theme: '#D46197',
          cat: 'テキスト',
        },
        {
          date: new Date().toISOString().slice(0, 10),
          title: this.textGenerator(3),
          text: this.textGenerator(15),
          theme: '#329C55',
          cat: 'テキスト',
        },
        {
          date: new Date().toISOString().slice(0, 10),
          title: this.textGenerator(3),
          text: this.textGenerator(15),
          theme: '#DC7D35',
          cat: 'テキスト',
        },
        {
          date: new Date().toISOString().slice(0, 10),
          title: this.textGenerator(3),
          text: this.textGenerator(15),
          theme: '#D46197',
          cat: 'テキスト',
        },
        {
          date: new Date().toISOString().slice(0, 10),
          title: this.textGenerator(3),
          text: this.textGenerator(15),
          theme: '#D46197',
          cat: 'テキスト',
        },
      ]
    },
  },
  methods: {
    textGenerator(freq) {
      return textGenerator.generate(freq)
    },
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