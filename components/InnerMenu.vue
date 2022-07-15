<template>
	<v-card
		class="wraper-card"
		height="100vh"
		max-width="300"
		tile
		elevation="0"
		:color="bg"
	>
		<div class="d-block d-sm-none" style="height: 70px"></div>
		<div class="menu-item-wrap">
			<div
				v-for="(item, i) in items"
				:key="i"
				class="menu-item"
				@click="handleRoute(item.route)"
				:style="{ padding: `1rem 0 ${localPadding}rem 1rem`, }"
			>
				<div
					class="text-uppercase menu-en"
					:style="{
						color: textColor,
						fontSize: titleSize + 'rem',
					}"
				>{{ item.text }}</div>
				<div class="hr"></div>
				<div class="text-caption">{{ item.sub }}</div>
			</div>
		</div>    
	</v-card>
</template>

<script>
export default {
	props: [
		'bg',
		'items',
		'titleSize',
		'paddingBottom',
		'logo',
		'textColor',
	],
	data() {
		return {
			listItemVisible: false,
		}
	},
	computed: {
		localPadding() {
			return this.paddingBottom ? this.paddingBottom : '0'
		},
	},
	methods: {
		handleRoute(route) {
			this.$emit('goToPage', route)       
		},
	},
}
</script>

<style lang="scss" scoped>
.wraper-card {
	overflow-x: hidden;
	position: relative;
	opacity: .8;
}
.inner-wg {
	position: absolute;
	bottom: 5%;
}
.menu-item-wrap {
	position: absolute;
	left: 0;
	width: 200px;
}
.hr {
  width: 0px;
  border-top: 1px solid grey;
  transition: width .5s;
}
.menu-item {
	left: 0;
	cursor: pointer;
}
.menu-item:hover {
	.hr {
		width: 130px;
	}
}
</style>