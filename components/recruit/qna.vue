<template>
  <v-row class="mb-6 mx-0 pa-0" justify="center">
    <v-col cols="10">
      <div class="font-weight-bold">
        {{ textGenerator(4) }}
      </div>
    </v-col>
    <v-col cols="10">
      <div class="text-medium">
        {{ textGenerator(12) }}
      </div>
    </v-col>
  </v-row>
</template>

<script>
import textGenerator from '../../../../animations/textGenerator'
export default {
  methods: {
    textGenerator(freq) {
      return textGenerator.generate(freq)
    },
  },
}
</script>