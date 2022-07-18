import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
	items: [
		{ text: 'top', sub: 'トップ', route: '/top' },
		{ text: 'about', sub: 'メカドック', route: '/about' },
		{ text: 'services', sub: 'サービスメニュー', route: '/services' },
		{ text: 'custom bikes', sub: 'カスタムバイク', route: '/custom_bikes'},
		{ text: 'parts', sub: '取り扱いパーツ', route: '/parts'},
		{ text: 'photo reports', sub: 'フォトレポート', route: '/photo_reports'},
		{ text: 'journals', sub: '工場日記', route: '/journals'},
		{ text: 'staffs', sub: 'スタッフ', route: '/staffs'},
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