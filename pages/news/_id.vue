<template>
  <div 
    :style="{
      backgroundColor: color,
      padding: '7rem 0',
    }"
  >
    <v-container class="mother">
      <v-card rounded="xl" width="100%" class="pt-10">
        <v-row justify="center">
          <v-col sm="10" cols="11">
            <v-card-actions>
              <v-chip :color="color" dark small class="d-block">{{ getDummy.cat }}</v-chip>
              <v-spacer></v-spacer>
              <v-chip small class="d-block">{{ getDummy.date }}</v-chip>
            </v-card-actions>
            <v-card-text>
              <div class="text-h6 font-weight-bold">
                {{ getDummy.title }}
              </div>
              <v-row justify="center" class="my-4">
                <v-col
                  align-self="center"
                  cols="12"
                  sm="5"
                >
                  <v-responsive
                    aspect-ratio="1.5041"
                    :style="{
                      backgroundColor: color,
                      width: '85%',
                      borderRadius: '15px',
                      opacity: .7,
                    }"
                    class="mr-auto"
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
                  cols="12"
                  sm="7"
                >
                  <div style="line-height: 2">
                    {{ textGenerator(40) }}
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import textGenerator from '../../../../animations/textGenerator'
export default {
  computed: {
    ...mapGetters('homepage-kit', ['color']),
    ...mapGetters('news', ['getDummy']),
  },
  methods: {
    textGenerator(freq) {
      return textGenerator.generate(freq)
    },
  },
}
</script>

<style scoped>
.mother {
  max-width: 1000px !important;
}
</style>