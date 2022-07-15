<template>
  <v-responsive
    aspect-ratio="35"
    width="100%"
    :style="{ backgroundColor: color }"
  >
    <v-row class="ma-0 pa-0" justify="center" style="height: 100%">
      <v-col align-self="center">
        <div class="white--text text-center" style="font-size: 1.5rem">
          {{ title }}
        </div>
      </v-col>
    </v-row>
  </v-responsive>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: ['title'],
  computed: {
    ...mapGetters('homepage-kit', ['color']),
  },
}
</script>