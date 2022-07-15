import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
	items: [
		{ text: 'top', sub: 'トップ', route: '/top' },
		{ text: 'about', sub: '企業情報', route: '/about' },
		{ text: 'services', sub: 'サービス', route: '/services' },
		{ text: 'recruit', sub: '採用情報', route: '/recruit'},
		{ text: 'news', sub: 'ニュース', route: '/news'},
		{ text: 'contact', sub: 'お問い合わせ', route: '/contact'},
	],
})

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
}