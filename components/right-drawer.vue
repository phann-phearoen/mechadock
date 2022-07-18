<template>
  <div id="right-drawer" class="right d-none d-sm-block">
		<v-card 
      class="verticle"
      tile
      elevation="2"
		>
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
        @click="openColorPicker"
			>
        <div class="pt-3 pl-2 white--text">logo</div>
      </div>
      
			<v-icon 
        class="drawer-btn" 
        @click="toggleDrawer" 
        id="hamburger"
			>mdi-menu</v-icon>

			<v-icon 
        class="drawer-btn" 
        id="up"
        @click="toTop">
        mdi-chevron-up-circle-outline
			</v-icon>
		</v-card>
    <inner-menu
      :items="items"
      :bg="'white'"
      :titleSize="'1'"
      @goToPage="goToPage"
    ></inner-menu>
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
      const theDrawer = document.getElementById('right-drawer')
      if(this.drawer === null || this.drawer === false) {
        theDrawer.classList.remove('shrink-menu')
        theDrawer.classList.add('expand-menu')
        this.drawer = true
      }
      else {
        theDrawer.classList.remove('expand-menu')
        theDrawer.classList.add('shrink-menu')
        this.drawer = false
      }
    },
    goToPage(route) {
      this.toggleDrawer()
      if(route === this.currentRoute) {
        return
      }
      if(route === '/top') {
        this.$router.push('/')
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
.right {
	position: fixed;
	right: 0px;
	width: 70px;
	height: 100vh;
}
.verticle {
	float: left;
	background-color: white;
	position: relative;
	width: 70px;
	height: 100%;
}

#hamburger {
	cursor: pointer;
	position: absolute;
	top: 48%;
	left: 30%;
}
#up {
	cursor: pointer;
	position: absolute;
	left: 30%;
	top: 93%;
}

.drawer-btn:hover {
	opacity: .9;
}
.inner-menu {
	background-color: white;
	opacity: .9;
	float: right;
	position: relative;
	width: 0px;
	height: 100%;
}

.expand-menu {
	animation: .5s ease-in 0s 1 move-left forwards;
}
.shrink-menu {
	animation: .5s ease-in 0s 1 move-right forwards;
}

@keyframes move-left {
	0% {
		width: 70px;
	}
	100% {
		width: 270px;
	}
}
@keyframes move-right {
	0% {
		width: 270px;
	}
	100% {
		width: 70px;
	}
}
</style>