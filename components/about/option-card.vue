<template>
  <v-responsive
    class="rounded-circle outer-card mx-auto"
    aspect-ratio="1"
    :style="{ backgroundColor: 'white' }"
    @mouseenter="expand"
    @mouseleave="reverse"
    @click="handleRoute(route)"
  >
		<v-responsive
      aspect-ratio="1"
      :style="{ backgroundColor: color }"
      class="icon-wrap rounded-circle"
      :class="[
        expandCircle === 'expand' ? 'icon-wrap-expand' : '',
        expandCircle === 'shrink' ? 'icon-wrap-shrink' : '',
      ]"
    >
    </v-responsive>
    <v-icon class="icon" color="white">mdi-chevron-right</v-icon>
    <div class="text-wrap">
      <div
        class="text-center"
        :style="{
          color: textColor,
          fontSize: '1.2rem',
        }"
      >
        {{ text }}
      </div>
    </div>
  </v-responsive>
</template>

<script>
export default {
	props: ['text', 'color', 'route'],
	data() {
		return {
			expandCircle: null,
			windowWidth: 0,
		}
	},
  computed: {
    textColor() {
      if(this.expandCircle === 'expand')
        return 'white'
      return this.color
    },
  },
	methods: {
		expand() {
			this.expandCircle = 'expand'
		},
		reverse() {
      this.expandCircle = 'shrink'
		},
		handleRoute(route) {
			this.$router.push(route)
		},
	},
}
</script>

<style scoped>
.outer-card {
  width: 90%;
  cursor: pointer;
}
.icon-wrap {
  position: absolute;
  display: flex;
  left: 45%;
  top: 60%;
  width: 25px;
}
.icon {
  display: block;
  position: absolute;
  top: 59.5%;
  left: 45.5%;
}
.text-wrap {
  position: absolute;
  top: 40%;
  width: 100%;
}
.icon-wrap-expand {
  animation: .7s ease-in 0s 1 expandCircle forwards;
}
.icon-wrap-shrink {
  animation: .7s ease-in 0s 1 shrinkCircle forwards;
}
@keyframes expandCircle {
  0% {
    left: 45%;
    top: 60%;
    width: 25px;
  }
  100% {
    width: 95%;
    top: 2.5%;
    left: 2.5%;
  }
}
@keyframes shrinkCircle {
  0% {
    width: 95%;
    top: 2.5%;
    left: 2.5%;
  }
  100% {
    left: 45%;
    top: 60%;
    width: 25px;
  }
}
</style>