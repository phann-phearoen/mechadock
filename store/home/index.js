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
				<div style="display: flex; margin-bottom: 2rem;">
					<div style="color: white; ">
						夢、妄想（カスタム）相談承ります。<br><br>
						一番心配なのは、妄想（カスタム）にかかる金額等ですが、<br>
						お客様の希望をお聞きした上で金額を決定します。<br>
						その後、追加金が必要な場合はその理由を説明し、お客様との相談になります。<br>
						勝手に金額が大きくなるような事はありません。<br>
						ご安心下さい！
					</div>
					<img
						src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_003_001.jpg"
						style="width: 300px;"
					>
				</div>

				<div style="display: flex">
					<div
						style="
							width: 300px;
							height: 300px;
							overflow: hidden;
							border: 1.5px solid white;
							border-radius: 10px;
							margin-right: 2rem;
							margin-bottom: 2rem;
						"
					>
						<img
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_003_002.jpg"
							style="width: 500px;"
						>
					</div>
					<div
						style="
							width: 300px;
							height: 300px;
							overflow: hidden;
							border: 1.5px solid white;
							border-radius: 10px;
							margin-right: 2rem;
							margin-bottom: 2rem;
						"
					>
						<img
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_003_002.jpg"
							style="width: 500px;"
						>
					</div>
				</div>
				<div style="display: flex">
					<div
						style="
							width: 300px;
							height: 300px;
							overflow: hidden;
							border: 1.5px solid white;
							border-radius: 10px;
							margin-right: 2rem;
							margin-bottom: 2rem;
						"
					>
						<img
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_003_004_cube.jpg"
							style="width: 300px;"
						>
					</div>
					<div
						style="
							width: 300px;
							height: 300px;
							overflow: hidden;
							border: 1.5px solid white;
							border-radius: 10px;
							margin-right: 2rem;
							margin-bottom: 2rem;
						"
					>
						<img
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_003_005_cube.jpg"
							style="width: 300px;"
						>
					</div>
				</div>
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