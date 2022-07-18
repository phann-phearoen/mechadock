import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
  color: 'black',
	services: [
		{
			title: '夢、妄想（カスタム）相談',
			contents: `
			
			`,
		},
		{
			title: '車検・公認車検',
			contents: `
			
			`,
		},
		{
			title: '各種点検・メンテナンス',
			contents: `
			
			`,
		},
		{
			title: 'ワンオフカラー製作・フレーム補強',
			contents: `
			
			`,
		},
		{
			title: 'ペイント・バフ掛け',
			contents: `
			
			`,
		},
		{
			title: 'フロントフォーク再メッキ加工',
			contents: `
			
			`,
		},
		{
			title: '草刈り機、発電機の修理もOK',
			contents: `
			
			`,
		},
	],
})

export default {
	namespaced: true,
	state,
	actions,
	mutations,
	getters,
}