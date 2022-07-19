<template>
  <v-container class="demo-container">
    <v-card width="100%" outlined dark>
      <v-card-title class="meka-title">取り扱いパーツ</v-card-title>
      <v-divider dark></v-divider>
      <v-card-text>
        <v-card dark outlined>
          <v-row
            v-for="(item, i) in data"
            :key="i"
            class="ma-0 pa-0"
          >
            <v-col cols="3">
              <div class="text-big">
                {{ item.title }}:
              </div>
            </v-col>
            <v-col>
              <div>
                {{ item.desc }}
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          title: 'オイル',
          desc: 'ワコーズ 、モチュール',
        },
        {
          title: 'タイヤ',
          desc: 'ダンロップ 、ピレリ',
        },
        {
          title: '各種パーツ',
          desc: 'デイトナ 、アクティブ 、プロト 、ヨシムラ',
        },
        {
          title: 'ミニバイクパーツ',
          desc: 'タケガワ 、キタコ 、Gクラフト 、シフトアップ',
        },
        {
          title: 'バッテリー',
          desc: 'GSユアサ 、ACデルコ 、デイトナ',
        },
        {
          title: 'ブレーキパーツ',
          desc: 'ブレンボ 、AP 、ニッシン',
        },
        {
          title: 'サスペンションパーツ',
          desc: 'オーリンズ 、ナイトロン 、WP 、ショウワ',
        },
        {
          title: 'ホイール',
          desc: 'JBマグタン 、マルケジーニ 、OZ 、ゲイルスピード',
        },
        {
          title: 'キャブレター',
          desc: 'FCR 、TMR 、MJN 、CR',
        },
        {
          title: 'マフラー',
          desc: 'ヨシムラ 、ノジマ 、ナイトロレーシング',
        },
        {
          title: 'ヘルメット',
          desc: 'ショウエイ 、アライ',
        },
      ],
    }
  },
}
</script>