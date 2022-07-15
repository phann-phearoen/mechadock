<template>
  <div
    v-if="currentRoute.includes('about/') || currentRoute.includes('recruit/')"
    id="left-drawer"
    class="left-drawer" 
    :style="{
      height: '100vh'
    }"
  >
    <v-card 
      tile
      elevation="2"
      class="vertical"
    >
      <div
        class="toggler"
        @click="toggleDrawer"
      >
        <div class="vertical-text white--text">
          {{ currentRoute.includes('about') ? 'ABOUT' : 'RECRUIT' }}
        </div>
        <v-icon 
          class="white--text"
        >
          mdi-chevron-{{ arrow }}
        </v-icon>
      </div>
    </v-card>
    <inner-menu
      :bg="'black'"
      :items="options"
      :textColor="'white'"
      :paddingBottom="'1'"
      @goToPage="goToPage"
    ></inner-menu>
  </div>
</template>

<script>
import InnerMenu from './InnerMenu.vue'
export default {
  components: { InnerMenu, },
  props: ['aboutOptions', 'recruitOptions'],
  data () {
    return {
      drawer: null,
      arrow: 'right',
      options: null,
    }
  },
  computed: {
    currentRoute() {
      return this.$route.path
    },
  },
  watch: {
    currentRoute(val) {
      if(val.includes('about')) {
        this.options = this.aboutOptions
        return
      }
      if(val.includes('recruit')) {
        this.options = this.recruitOptions
        return
      }
    },
  },
  methods: {
    toggleDrawer () {
      const theDrawer = document.getElementById('left-drawer')
      if(this.drawer === null || this.drawer === false) {
        theDrawer.classList.remove('shrink-menu')
        theDrawer.classList.add('expand-menu')
        this.drawer = true
        this.arrow = 'left'
      }
      else {
        theDrawer.classList.remove('expand-menu')
        theDrawer.classList.add('shrink-menu')
        this.drawer = false
        this.arrow = 'right'
      }
    },
    goToPage(route) {
      this.$router.push(route)
      this.toggleDrawer()
    },
  },
}
</script>

<style scoped>
.left-drawer {
  position: fixed;
  z-index: 3;
  left: 0;
}
.vertical {
  float: right;
  position: relative;
  height: 100%;
  width: 3vh;
  background-color: #000000 !important;
}
.toggler {
  position: relative;
  top: 40%;
  cursor: pointer;
}
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
  font-weight: 300;
}
.toggler:hover {
  opacity: .9;
}

.expand-menu {
  animation: .5s ease-in 0s 1 move-right forwards;
}
.shrink-menu {
  animation: .5s ease-in 0s 1 move-left forwards;
}

@keyframes move-right {
  0% {
    width: 3vh;
  }
  100% {
    width: 28vh;
  }
}
@keyframes move-left {
  0% {
    width: 28vh;
  }
  100% {
    width: 3vh;
  }
}
</style>