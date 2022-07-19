<template>
  <v-row class="staff-card my-2 mx-0 pa-0">
    <v-col align-self="center" cols="4">
      <v-img
        :src="staff.img"
        width="90%"
        class="d-block mx-auto"
        style="border-radius: 10px"
      ></v-img>
    </v-col>
    <v-col align-self="center">
      <div class="staff-name mb-1 white--text">「{{ staff.name }}」</div>
      <v-divider dark></v-divider>
      <v-chip class="my-2" small light label>Nickname is {{ staff.nick }}</v-chip>
      <div
        v-for="line in staff.intro"
        :key="line"
        class="intro"
      >{{ line }}</div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['staff'],
}
</script>

<style scoped>
.staff-name {
  font-size: 2rem;
  font-weight: 500;
}
.intro {
  font-size: 1.25rem;
}
</style>