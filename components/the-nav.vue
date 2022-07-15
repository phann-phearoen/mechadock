<template>
  <div class="d-block d-sm-none" style="z-index: 20">
    <div id="nav-menu">
      <div class="menu-item-wrap">
        <div
          v-for="(item, i) in items"
          :key="i"
          class="menu-item"
          @click="goToPage(item.route)"
          :style="{ padding: `1rem 0 0 1rem`, }"
        >
          <div
            class="text-uppercase menu-en"
            :style="{ fontSize: '1.4rem' }"
          >{{ item.text }}</div>
          <div class="text-caption">{{ item.sub }}</div>
        </div>
      </div>
    </div>
    <v-card
      id="the-nav"
      tile
      elevation="2"
      width="100%"
      color="white"
      height="70"
    >
      <v-card-actions>
        <div
          class="rounded-circle" 
          style="
            cursor:pointer;
            width: 50px;
            height: 50px;
            opacity: .7;
            font-weight: 600;
          "
          :style="{ backgroundColor: color }"
          @click="openColorPicker"
        >
          <div class="pt-3 pl-2 white--text">logo</div>
        </div>
        <v-spacer></v-spacer>
        <v-icon 
          class="menu-icon d-block"
          large
          @click="toggleDrawer"
        >
          mdi-{{ drawer === true ? 'close' : 'menu'}}
        </v-icon>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import InnerMenu from './InnerMenu.vue'
export default {
  components: {
    InnerMenu,
  },
  data () {
    return {
      drawer: null,
    }
  },
  computed: {
    ...mapGetters('homepage-kit', ['color']),
    ...mapGetters('right-drawer', { 'items':'getItems' }),
    currentRoute() {
      const route = this.$route.path
      if(route === '/about')
        return ''
      else
        return route
    },
  },
  methods: {
    toTop() {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth'})
      }, 100)
    },
    toggleDrawer () {
      const theDrawer = document.getElementById('nav-menu')
      if(this.drawer === null || this.drawer === false) {
        theDrawer.classList.remove('close-menu')
        theDrawer.classList.add('open-menu')
        this.drawer = true
      }
      else {
        theDrawer.classList.remove('open-menu')
        theDrawer.classList.add('close-menu')
        this.drawer = false
      }
    },
    goToPage(route) {
      this.toggleDrawer()
      if(route === this.currentRoute) {
        return
      }
      if(this.currentRoute.includes('demo')) {
        if(route === '/top') {
          this.$router.push('/homepage-kit/demo')
          return
        }
        this.$router.push(`/homepage-kit/demo${route}`)
        return
      }
      this.$router.push(route)
    },
    openColorPicker() {
      this.$nuxt.$emit('openColorPicker')
    },
  },
}
</script>

<style scoped>
#the-nav {
  position: fixed;
  top: 0;
}
#nav-menu {
  position: fixed;
  padding-top: 70px;
  top: 0;
  width: 100%;
  height: 0;
  opacity: .8;
  background-color: white;
  display: flex;
  overflow: hidden;
}
.open-menu {
  animation: .5s ease-in 0s 1 openDrawer forwards;
}
.close-menu {
  animation: .5s ease-in 0s 1 closeDrawer forwards;
}
@keyframes openDrawer {
  0% { height: 0; }
  100% { height: 100vh; }
}
@keyframes closeDrawer {
  0% { height: 100vh; }
  100% { height: 0; }
}
</style>