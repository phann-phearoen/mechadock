<template>
  <v-card id="the-footer" outlined>
    <v-row no-gutters justify="center" id="the-row">
      <v-col align-self="center" cols="12" sm="2">
        <v-img
          :src="require(`~/assets/logo_b.gif`)"
          width="90%"
          style="cursor: pointer"
          @click="toTop"
        ></v-img>
      </v-col>
      <v-col
        align-self="center"
        cols="12"
        sm="3"
        v-for="i in 3"
        :key="i"
      >
        <div style="cursor: pointer" class="text-center">テキストテキスト</div>
      </v-col>
      <v-col cols="12">
        <div class="text-center">
          ©{{ new Date().getFullYear() }}バイクプラザ メカドック All rights reserved.
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('homepage-kit', ['color']),
  },
  methods: {
    toTop() {
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
#the-footer {
  border-radius: 0 !important;
  border-bottom: none !important;
}
#the-row {
  max-width: 900px;
  margin: auto;
}
</style>