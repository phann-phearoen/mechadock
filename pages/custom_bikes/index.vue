<template>
  <v-container class="demo-container">
    <v-card rounded="lg" outlined dark>
      <v-card-title class="white--text meka-title">バイクのカスタム</v-card-title>
      <v-divider dark></v-divider>
      <v-card-text>
        <v-row class="ma-0 pa-0" justify="center">
          <v-col cols="12" sm="6" align-self="center">
            <div class="white--text">
              お客様に予算、希望などをお聞きした上<br>
              入念に打ち合わせをした後、作業に入ります。<br>
              途中、追加作業等が必要な場合は、<br>
              お客様ときちんと相談し<br>
              了承を得た上で作業しますので<br>
            </div>
            <div class="red--text">
              知らないうちに金額が大幅にUPする<br>
              ようなことはございません。<br><br>
            </div>
            <div class="white--text">
              完成後のアフターはもちろん、<br>
              大幅なカスタムをした車両についても<br>
              <span class="red--text">
                公認車検を取得
              </span>し、<br>
              安心して公道を走行できます。
            </div>
          </v-col>
          <v-col cols="12" sm="6" align-self="center">
            <v-img
              src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_004_001_mid.jpg"
              width="80%"
              class="rounded d-block mx-auto"
              style="cursor: pointer"
              @click="enlarge = true"
            ></v-img>
            <div class="text-center">
              GSX750E カスタム。もちろん車検もばっちり！<br>
              ▲（画像クリックで車検証を拡大できます）
            </div>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
    <v-dialog v-model="enlarge" max-width="80%" style="position: relative">
      <v-card style="position: relative">
        <v-img
          src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_004_001_mid.jpg"
          width="100%"
          contain
          class="rounded d-block mx-auto"
        ></v-img>
        <v-icon
          style="
            position: absolute;
            right: .5em;
            top: .5em;
          "
          dark
          @click="enlarge = false"
        >mdi-close</v-icon>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      enlarge: false
    }
  },
}
</script>