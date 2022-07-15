<template>
  <div id="options">
    <v-container style="max-width: 900px">
      <v-row justify="center">
        <v-col
          cols="8"
          sm="4"
          v-for="(item, i) in options"
          :key="i"
        >
          <custom-circle
            :color="color"
            :route="item.route"
            :text="item.text"
          ></custom-circle>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomCircle from './option-card.vue'
export default {
  components: {
    CustomCircle,
  },
  data() {
    return {
      options: [
        {
          route: '/about/pattern1',
          text: 'パターン①',
        },
        {
          route: '/about/pattern2',
          text: 'パターン②',
        },
        {
          route: '/about/pattern3',
          text: 'パターン③',
        },
        {
          route: '/about/pattern4',
          text: 'パターン④',
        },
        {
          route: '/about/pattern5',
          text: 'パターン⑤',
        },
        {
          route: '/about/pattern6',
          text: 'パターン⑥',
        },
      ]
    }
  },
  computed: {
    ...mapGetters('homepage-kit', ['color']),
  },
}
</script>

<style scoped>
#options {
  background-color: #EEF3FB;
  padding: 5rem 0;
}
</style>