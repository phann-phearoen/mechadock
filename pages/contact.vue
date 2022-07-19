<template>
  <v-container class="demo-container">
    <v-card dark outlined>
      <v-card-title class="meka-title">お問合せ</v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <v-row justify="center" class="ma-0 pa-0">
          <v-col cols="12" sm="10">
            <v-form>
              <v-text-field 
                outlined
                requied
                label="お名前"
              ></v-text-field>
              <v-text-field 
                outlined
                requied
                label="ご住所"
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
                light
                class="d-block mx-auto mt-6"
              >
                送信
              </v-btn>
            </v-form>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
}
</script>