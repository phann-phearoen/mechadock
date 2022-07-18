<template>
  <v-container class="frame-container">
    <v-card color="grey">
      <v-card-actions>
        <div class="font-weight-bold white--text meka-title">
          BLOG
        </div>
        <v-spacer></v-spacer>
        <v-chip
          color="white"
          class="d-block"
          @click="toAmeblo"
        >
          amebloはコチラ
        </v-chip>
      </v-card-actions>
      <iframe
        class="blog-frame"
        src="https://ameblo.jp/mechadock"
        frameborder="0"
      ></iframe>
    </v-card>
  </v-container>
</template>

<script>
export default {
  methods: {
    toAmeblo() {
      window.open('https://ameblo.jp/mechadock', '_blank')
    },
  },
}
</script>

<style scoped>
.frame-container {
  max-width: 1000px;
  padding: 2rem auto;
}
.blog-frame {
  width: 100%;
  min-height: 80vh;
}
</style>