<template>
  <div id="top">
    <v-carousel
      height="fit-content"
      cycle
      :show-arrows="false"
      style="postion: relative"
      hide-delimiter-background
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
      >
        <v-img
          :src="item"
          width="100vw"
          aspect-ratio="1.95"
        ></v-img>
      </v-carousel-item>
    </v-carousel>
    <v-responsive
      id="overlay"
      width="100%"
      aspect-ratio="1.95"
    >
      <v-img
        :src="require(`~/assets/logo_b.gif`)"
        max-width="200"
        contained
      ></v-img>
    </v-responsive>
    <news></news>
    <blog></blog>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      items: [
        require(`~/assets/1-min.jpeg`),
        require(`~/assets/2-min.jpeg`),
        require(`~/assets/3-min.jpeg`),
        require(`~/assets/4-min.jpeg`),
        require(`~/assets/5-min.jpeg`),
      ],
    }
  },
  computed: {
    ...mapGetters('home', ['color']),
  },
}
</script>

<style scoped>
#top {
  position: relative;
}
#overlay {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
}
</style>