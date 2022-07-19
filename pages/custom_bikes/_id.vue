<template>
  <v-container class="demo-container">
    <v-card width="100%" dark outlined>
      <v-card-title class="meka-title">
        {{ thisWork.model }}
      </v-card-title>
      <v-divider dark></v-divider>
      <v-card-text>
        <v-img
          :src="thisWork.img"
          class="d-block mx-auto"
          width="90%"
          style="border-radius: 10px"
        ></v-img>
      </v-card-text>
      <v-card-title class="meka-title">
        オーナー
      </v-card-title>
      <v-divider dark></v-divider>
      <v-card-text>
        <div class="text-big">
          {{ thisWork.owner }}
        </div>
      </v-card-text>
      <div v-if="thisWork.comment">
        <v-card-title class="meka-title">
          コメント
        </v-card-title>
        <v-divider dark></v-divider>
        <v-card-text class="text-big">
          {{ thisWork.comment }}
        </v-card-text>
      </div>
      <v-card-title class="meka-title">
        Spec
      </v-card-title>
      <v-divider dark></v-divider>
      <v-card-text>
        <v-card outlined dark>
          <v-card-text>
            <v-row
              v-for="(spec, key) in thisWork.spec"
              :key="key"
              class="ma-0 pa-0"
            >
              <v-col align-self="center" cols="3">
                <div>
                  {{ key }}:
                </div>
              </v-col>
              <v-col align-self="center">
                <div>
                  {{ spec }}
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text>
      <v-card-title class="meka-title">
        その他の写真
      </v-card-title>
      <v-divider dark></v-divider>
      <v-card-text>
        <v-card dark outlined>
          <v-card-text>
            <v-row class="ma-0 pa-0">
              <v-col
                cols="12"
                sm="4"
                md="3"
                v-for="(img, i) in thisWork.extra"
                :key="i"
              >
                <v-img
                  :src="img"
                  aspect-ratio="1"
                  width="100%"
                  class="d-block mx-auto"
                  style="border-radius: 10px;"
                ></v-img>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('home', ['getWorks']),
    thisWork() {
      return this.getWorks[this.$route.params.id]
    },
  },
}
</script>