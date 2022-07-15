<template>
  <v-card id="the-footer" outlined>
    <v-row no-gutters justify="center" id="the-row">
      <v-col align-self="center" cols="12" sm="2">
        <div
          class="rounded-circle mx-auto mt-4 drawer-btn" 
          style="
            cursor:pointer;
            width: 50px;
            height: 50px;
            opacity: .7;
            font-weight: 600;
          "
          :style="{ backgroundColor: color }"
        >
          <div class="pt-3 pl-2 white--text">logo</div>
        </div>
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
          Copyright ©
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