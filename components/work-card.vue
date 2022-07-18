<template>
  <v-card
    width="100%"
    light
    style="cursor: pointer"
    @click="openWork"
  >
    <v-responsive aspect-ratio=".95" width="100%">
      <v-img
        :src="work.img"
        aspect-ratio="1"
        class="ma-1"
      ></v-img>
      <v-card-text>
        <div>
          {{ work.model }}
        </div>
      </v-card-text>
    </v-responsive>
  </v-card>
</template>

<script>
export default {
  props: ['work', 'id'],
  methods: {
    openWork() {
      this.$router.push(`/custom_bikes/${this.id}`)
    }
  },
}
</script>