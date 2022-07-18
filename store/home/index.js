import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = () => ({
  color: 'black',
	services: [
		{
			title: '夢、妄想（カスタム）相談',
			head: '夢、妄想（カスタム）相談承ります。',
			contents: `
			
			`,
		},
		{
			title: '車検・公認車検',
			head: '車検・公認車検',
			contents: `
			
			`,
		},
		{
			title: '各種点検・メンテナンス',
			head: 'カワサキ　ＺＺＲ1100のキャブレターのオーバーフロー整備依頼で入庫しました。',
			contents: `
			
			`,
		},
		{
			title: 'ワンオフカラー製作・フレーム補強',
			head: 'ワンオフカラー製作・フレーム補強',
			contents: `
			
			`,
		},
		{
			title: 'ペイント・バフ掛け',
			head: '画像はカタナのフレームのダイヤモンドコート施工前と施工後です。',
			contents: `
			
			`,
		},
		{
			title: 'フロントフォーク再メッキ加工',
			head: 'フロントフォーク再メッキ加工',
			contents: `
			
			`,
		},
		{
			title: '草刈り機、発電機の修理もOK',
			head: '草刈り機、発電機の修理もOK',
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