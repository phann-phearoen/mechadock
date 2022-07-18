<template>
  <v-container class="demo-container">
    <v-card color="grey" rounded="lg">
      <v-card-title class="white--text meka-title">サービスメニュー</v-card-title>
      <v-divider dark></v-divider>
      <v-card-text>
        <div class="white--text text-medium">
          あなたの夢、妄想にとことんおつきあいいたします！<br>
          愛車のカスタムお任せ下さい！<br><br>
          バイクプラザメカドックはネットオークション会員です。<br>
          欲しいバイクは必ず見つけます！<br><br>
        </div>
      </v-card-text>
      <v-card-text>
        <v-row class="ma-0 pa-0" justify="center">
          <v-col
            v-for="(item, i) in getServices"
            :key="i"
            cols="12"
            sm="6"
            style="cursor: pointer"
          >
            <v-responsive
              aspect-ratio="2.812182"
              width="100%"
              style="background-color: orange; border-radius: 10px"
            >
              <v-row
                class="pa-0 ma-0"
                justify="center"
                style="height: 100%"
              >
                <v-col cols="8" align-self="center">
                  <div class="white--text text-medium font-weight-bold">
                    {{ item.title }}
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
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('home', ['getServices'])
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