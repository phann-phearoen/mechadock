<template>
  <div>
    <custom-title :title="'お問合せ'"></custom-title>
    <v-container class="demo-container">
      <v-row justify="center" class="ma-0 pa-0">
        <v-col cols="10" sm="9">
          <v-form>
            <v-text-field 
              outlined
              requied
              label="お名前"
            ></v-text-field>
            <v-text-field 
              outlined
              requied
              label="電話番号"
            ></v-text-field>
            <v-text-field 
              outlined
              requied
              label="メールアドレス"
            ></v-text-field>
            <v-textarea
              label="お問合せ内容"
              outlined
              rows="8"
            ></v-textarea>
            <v-btn
              :color="color"
              min-width="200"
              rounded
              dark
              class="d-block mx-auto mt-6"
            >
              ボタン
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import CustomTitle from '../components/recruit/recruit-title.vue'
import { mapGetters } from 'vuex'
export default {
  components: {
    CustomTitle,
  },
  computed: {
    ...mapGetters('homepage-kit', ['color']),
  },
}
</script>