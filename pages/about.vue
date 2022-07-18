<template>
  <v-container class="demo-container">
    <v-card rounded="lg" outlined dark>
      <v-card-title class="white--text meka-title">メカドックについて</v-card-title>
      <v-divider dark></v-divider>
      <v-card-text>
        <div class="text-big white--text">
          店名
        </div>
        <div class="white--text ml-5">
          バイクプラザ Mecha'dock
        </div>
      </v-card-text>
      <v-card-text>
        <div class="text-big white--text">
          ボス
        </div>
        <div class="white--text ml-5">
          阿部 寿久
        </div>
      </v-card-text>
      <v-card-text>
        <div class="text-big white--text">
          スタッフ
        </div>
        <div class="white--text ml-5">
          畑中 仁
        </div>
      </v-card-text>
      <v-card-text>
        <div class="text-big white--text">
          住所
        </div>
        <div class="white--text ml-5">
          札幌市手稲区手稲山口650番地3
        </div>
      </v-card-text>
      <v-card-text>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d44758.26379368584!2d141.208976!3d43.144291!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b2724f4113ed9%3A0x1ba1cd4034d7688!2s650%20Teineyamaguchi%2C%20Teine%20Ward%2C%20Sapporo%2C%20Hokkaido%20006-0860!5e1!3m2!1sen!2sjp!4v1658119095897!5m2!1sen!2sjp"
          id="map"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </v-card-text>
      <v-card-text>
        <div class="text-big white--text">
          TEL／FAX
        </div>
        <div class="white--text ml-5">
          011-694-6567／011-694-3619
        </div>
      </v-card-text>
      <v-card-text>
        <div class="text-big white--text">
          営業時間
        </div>
        <div class="white--text ml-5">
          9:00〜18:00
        </div>
      </v-card-text>
      <v-card-text>
        <div class="text-big white--text">
          休業日
        </div>
        <div class="white--text ml-5">
          夏期（4月〜10月）　　第1,3(,5)日曜日<br>
          冬期（11月〜3月）　　不定休
        </div>
      </v-card-text>
      <v-card-text>
        <div class="white--text ml-5">
          札幌商工会議所会員<br>
          日本二輪車協会会員<br>
          北海道二輪車商業協同組合会員<br>
          NMCA中古二輪査定士<br>
          古物商北海道公安委員会 西古第22号<br>
          オークネットオークション会員<br>
          自動車公正取引協議会会員

        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.text-big {
  border-left: white solid 3px;
  padding-left: 3px;
}
#map {
	width: 100%;
	height: 500px;
	border: 0 !important;
  border-radius: 10px;
	margin: 0 auto 2em auto;
}
</style>