<template>
  <v-app :dark="setTheme" style="background-color: black">
    <div
      id="the-nav-spacer"
      class="d-block d-sm-none"
      style="height: 70px"
    ></div>
    <Nuxt />
    <the-footer></the-footer>
    <left-drawer
      :aboutOptions="aboutOptions"
      :recruitOptions="recruitOptions"
    ></left-drawer>
    <right-drawer></right-drawer>
    <the-nav></the-nav>
    <v-dialog
      width="300"
      v-model="colorPicker"
      id="color-picker"
    >
      <v-card width="300">
				<v-card-title>サイトカラーを選択</v-card-title>
				<v-divider></v-divider>
				<v-card-text>
					<v-color-picker
						width="290"
						dot-size="20"
						swatches-max-height="100"
						mode="hexa"
						hide-inputs
						v-model="localColor"
					></v-color-picker>
				</v-card-text>
				<v-card-actions>
					<v-btn
						class="mt-4 ml-auto"
						elevation="0"
						@click="colorPicker=false"
					>取り消す</v-btn>
					<v-spacer></v-spacer>
					<v-btn
						class="mt-4 ml-auto"
						elevation="0"
						color="blue"
						dark
						@click="pickColor()"
					>続ける</v-btn>
				</v-card-actions>
			</v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import RightDrawer from '../components/right-drawer.vue'
import TheFooter from '../components/the-footer.vue'
import LeftDrawer from '../components/left-drawer.vue'
import TheNav from '../components/the-nav.vue'
export default {
  components: {
    RightDrawer,
    TheFooter,
    LeftDrawer,
    TheNav,
  },
  data() {
    return {
      colorPicker: false,
      localColor: null,
      aboutOptions: [
        {
          route: '/about/pattern1',
          text: 'パターン①',
        },
        {
          route: '/about/pattern2',
          text: 'パターン②',
        },
        {
          route: '/about/pattern3',
          text: 'パターン③',
        },
        {
          route: '/about/pattern4',
          text: 'パターン④',
        },
        {
          route: '/about/pattern5',
          text: 'パターン⑤',
        },
        {
          route: '/about/pattern6',
          text: 'パターン⑥',
        },
      ],
      recruitOptions: [
        {
          route: '/recruit/pattern1',
          text: 'パターン①',
        },
        {
          route: '/recruit/pattern2',
          text: 'パターン②',
        },
        {
          route: '/recruit/pattern3',
          text: 'パターン③',
        },
      ],
      colorPopup: true,
    }
  },
  computed: {
		setTheme () {
			this.$vuetify.theme.dark = false
		},
    currentRoute() {
      return this.$route.path
    },
  },
  methods: {
    pickColor() {
      this.$store.commit('homepage-kit/set_color', this.localColor.hex)
      this.colorPicker = false
    },
  },
  mounted() {
    this.$nuxt.$on('openColorPicker', () => {
      this.colorPicker = true
    })
    setTimeout(() => {
      this.colorPopup = false
    }, 3000)
  },
  beforeDestroy() {
    this.$nuxt.$off('openColorPicker')
  },
}
</script>

<style>
.demo-container {
  max-width: 1000px !important;
  padding: 8rem 0 !important;
}
.pattern-title {
  margin-bottom: 10rem;
}
.text-extra-big {
  font-size: 3rem;
}
.text-big {
  font-size: 2rem;
}
.text-medium {
  font-size: 1rem;
}
#color-popup {
  position: fixed;
  right: 75px;
  top: 50px;
} 
#color-popup-small {
  position: fixed;
  left: 10px;
  top: 80px;
}
</style>