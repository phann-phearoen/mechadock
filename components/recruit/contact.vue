<template>
  <v-row class="ma-0 pa-0" justify="center">
    <v-col cols="10">
      <v-form>
        <v-text-field 
          outlined
          requied
          label="お名前"
        ></v-text-field>
        <v-row no-gutters class="ma-0 pa-0" justify="center">
          <v-col cols="12" sm="4">
            <v-text-field
              outlined
              label="年齢"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" offset-sm="2">
            <div class="d-inline-block mr-4">性別</div>
            <v-radio-group
              v-model="radioGroup"
              :column="false"
              class="d-inline-block"
            >
              <v-radio
                value="f"
                label="女性"
              ></v-radio>
              <v-radio
                value="m"
                label="男性"
                class="mx-4"
              ></v-radio>
              <v-radio
                value="o"
                label="その他"
              ></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
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
        <v-text-field 
          outlined
          requied
          label="お住いの都道府県"
        ></v-text-field>
        <v-text-field 
          outlined
          requied
          label="現在のご職業"
        ></v-text-field>
        <v-textarea
          label="経歴・自己PR"
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
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      radioGroup: null,
    }
  },
  computed: {
    ...mapGetters('homepage-kit', ['color']),
  },
}
</script>