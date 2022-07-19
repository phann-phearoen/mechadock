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
				<div style="color: white; margin-bottom: 2rem">
					車検・公認車検<br>
					大幅なカスタムをした場合でも、公認車検を取得します。<br>
					安心して公道を走行できます！
				</div>
				<img
					src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_004_001_mid.jpg"
					style="max-width: 500px;"
				>
			`,
		},
		{
			title: '各種点検・メンテナンス',
			head: 'カワサキ　ＺＺＲ1100のキャブレターのオーバーフロー整備依頼で入庫しました。',
			contents: `
				<div style="display: flex; margin-bottom: 2rem;">
					<div style="color: white; ">
						カワサキ　ＺＺＲ1100のキャブレターのオーバーフロー整備依頼で入庫しました。<br>
						キャブレターを外すにはタンク、エアクリーナーＢＯＸを外すので、<br>
						その辺も一緒に点検<br>
						この機会でしか見れないプラグなどもチェックしたところ<br>
						ヘッドカバーガスケットからプラグホールにオイルの混入あり<br>
						プラグホールガスケットを交換。<br>
						ステムベアリングに違和感があったのでバラしてみたところ<br>
						ベアリング油分不足で寿命でしたので交換しました。					
					</div>
					<img
						src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_005_001_mid.jpg"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_005_002_cube.jpg"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_005_003_cube.jpg"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_005_005_cube.jpg"
							style="width: 300px;"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_005_006_cube.jpg"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_005_007_cube.jpg"
							style="width: 300px;"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_005_008_cube.jpg"
							style="width: 300px;"
						>
					</div>
				</div>
			`,
		},
		{
			title: 'ワンオフカラー製作・フレーム補強',
			head: 'ワンオフカラー製作・フレーム補強',
			contents: `
				<div style="color: white; margin-bottom: 2rem">
					ワンオフカラー製作・フレーム補強
				</div>
				<img
					src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_006_001_mid.jpg"
					style="max-width: 500px;"
				>
			`,
		},
		{
			title: 'ペイント・バフ掛け',
			head: '画像はカタナのフレームのダイヤモンドコート施工前と施工後です。',
			contents: `
				<div style="display: flex; margin-bottom: 2rem;">
					<div style="color: white; ">
						ペイント・バフ掛け<br><br>
						画像はカタナのフレームのダイヤモンドコート施工前と施工後です。<br><br>
						タンクはペイントプロショップ・クニファクトリーさんの手によるものです。<br><br>
						2015/3/26　バフ掛け前、バフ掛け後の画像追加しました				
					</div>
					<img
						src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_001_mid.jpg"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_002_cube.jpg"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_003_cube.jpg"
							style="width: 300px;"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_004_cube.jpg"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_005_cube.jpg"
							style="width: 300px;"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_006_cube.jpg"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_007_cube.jpg"
							style="width: 300px;"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_008_cube.jpg"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_009_cube.jpg"
							style="width: 300px;"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_010_cube.jpg"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_011_cube.jpg"
							style="width: 300px;"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_012_cube.jpg"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_013_cube.jpg"
							style="width: 300px;"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_014_cube.jpg"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_015_cube.jpg"
							style="width: 300px;"
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
							src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_007_016_cube.jpg"
							style="width: 300px;"
						>
					</div>
				</div>
			`,
		},
		{
			title: 'フロントフォーク再メッキ加工',
			head: 'フロントフォーク再メッキ加工',
			contents: `
				<div style="color: white">
				フロントフォーク再メッキ加工
				</div>
			`,
		},
		{
			title: '草刈り機、発電機の修理もOK',
			head: '草刈り機、発電機の修理もOK',
			contents: `
			<div style="color: white">
				草刈り機、発電機の修理もOK
			</div>
			<img
				src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_009_001_mid.jpg"
				style="max-width: 500px"
			><br>
			<img
				src="https://mechadock.com/wp-content/themes/mechadock/img/upload/20120928_009_002_cube.jpg"
				style="max-width: 500px"
			>
			`,
		},
	],
	works: [
		{
			model: 'SUZUKI　SV650X',
			img: 'https://mechadock.com/wp-content/uploads/2022/05/850_5283-scaled.jpg',
			owner: 'K.I様',
			spec: [
				{ ホイール: 'アドバンテージ　イグザクト' },
				{ リヤショック: 'ナイトロン' },
				{	ブレーキ: 'ゲイルスピード' },
			],
			extra: [
				'https://mechadock.com/wp-content/uploads/2022/04/DSC01739-768x513.jpg',
				'https://mechadock.com/wp-content/uploads/2022/04/DSC01744-768x513.jpg',
				'https://mechadock.com/wp-content/uploads/2022/04/DSC01745-768x513.jpg',
				'https://mechadock.com/wp-content/uploads/2022/04/DSC01746-768x513.jpg',
				'https://mechadock.com/wp-content/uploads/2022/04/DSC01747-768x513.jpg',
				'https://mechadock.com/wp-content/uploads/2022/04/DSC01748-768x513.jpg',
				'https://mechadock.com/wp-content/uploads/2022/04/DSC01749-768x513.jpg',
				'https://mechadock.com/wp-content/uploads/2022/04/DSC01750-768x513.jpg',
				'https://mechadock.com/wp-content/uploads/2022/04/DSC01751-768x513.jpg',
			],
		},
		{
			model: 'Kawasaki Z650',
			img: 'https://mechadock.com/wp-content/uploads/2021/11/850_4575-3.jpg',
			owner: '中村　香氏',
			comment: 'オーナーさんは小柄な女性ですが、足つきを良くするためにシート加工やリヤショック等に工夫をして足つきを確保しました。',
			spec: [
				{ ピストン: 'ヴォスナー850cc' },
				{ カム: 'ヨシムラＳＴ－１' },
				{ キャブ: 'FCR35' },
				{ マフラー: 'S.S.ITO 4-2-1メガホン' },
				{ ステップ: 'S.S.ITOバックステップ' },
				{ Ｆフォーク: 'KYB38ф' },
				{ リヤショック: 'ナイトロンＲ3' },
				{ ホイール: 'JBマグタンJB-4　2.75-18　4.00-18' },
				{ キャリパー: '前後ブレンボ' },
				{ キャリパーサポート: '前後S.S.ITO' },
				{ Ｆディスク: 'サンスタープレミアムレーシング320' },
				{ Ｒディスク: 'サンスターZ1Rタイプ250' },
			],
			extra: [
				'https://mechadock.com/wp-content/uploads/2021/11/850_4575-3.jpg',
				'https://mechadock.com/wp-content/uploads/2021/11/850_4578-768x512.jpg',
				'https://mechadock.com/wp-content/uploads/2021/11/image_6483441-1-768x768.jpg',
				'https://mechadock.com/wp-content/uploads/2021/11/image_6483441-768x768.jpg',
			],
		},
		{
			model: 'SUZUKI GS1000S',
			img: 'https://mechadock.com/wp-content/uploads/2021/09/93ea41c13cbf181bdfed027c789df618.jpeg',
			owner: '中村　展之氏',
			spec: [
				{ Ｆフォーク: 'JB-KYB38' },
				{ ステムキット: 'JB' },
				{ Ｆブレーキ: 'ブレンボ4Ｐレーシング' },
				{ Ｒディスク: 'サンスタープレミアムレーシング320ф' },
				{ Ｆディスク: 'サンスター250ф' },
				{ Ｒブレーキ: 'ブレンボ2Ｐ' },
				{ ホイール: 'JB-1 275-18 400-18' },
				{ マフラー: 'バンス＆ハインズ' },
				{ キャブレター: 'CRM-33ф' },
				{ ピストン: 'コスワース75ф' },
				{ スィングアーム: 'JBスクエアタイプ' },
				{ Ｒショック: 'ナイトロンR1' },
			],
			extra: [
				'https://mechadock.com/wp-content/uploads/2021/09/d7e58e1253423915d9cbbc0638de5bf5-768x576.jpeg',
				'https://mechadock.com/wp-content/uploads/2021/09/6a05fff3b9ad0c0f331414e70436a193-768x512.jpeg',
				'https://mechadock.com/wp-content/uploads/2021/09/e118c31984946f94df34235edfd00563-768x512.jpeg',
				'https://mechadock.com/wp-content/uploads/2021/09/ce4058ba5a82797ae91489f6bb927ecb-768x1024.jpeg',
				'https://mechadock.com/wp-content/uploads/2021/09/99207f7bdc0917e027f317ffdea32410-768x1024.jpeg',
				'https://mechadock.com/wp-content/uploads/2021/09/ff4b3eae4b3facd6964c8bcea894969f-768x576.jpeg',
				'https://mechadock.com/wp-content/uploads/2021/09/df122fea37a37cebf571c4a4033f14ba-768x1024.jpeg',
			],
		},
		{
			model: 'SUZUKI GS1000S',
			img: 'https://mechadock.com/wp-content/uploads/2021/09/93ea41c13cbf181bdfed027c789df618.jpeg',
			owner: '中村　展之氏',
			spec: [
				{ Ｆフォーク: 'JB-KYB38' },
				{ ステムキット: 'JB' },
				{ Ｆブレーキ: 'ブレンボ4Ｐレーシング' },
				{ Ｒディスク: 'サンスタープレミアムレーシング320ф' },
				{ Ｆディスク: 'サンスター250ф' },
				{ Ｒブレーキ: 'ブレンボ2Ｐ' },
				{ ホイール: 'JB-1 275-18 400-18' },
				{ マフラー: 'バンス＆ハインズ' },
				{ キャブレター: 'CRM-33ф' },
				{ ピストン: 'コスワース75ф' },
				{ スィングアーム: 'JBスクエアタイプ' },
				{ Ｒショック: 'ナイトロンR1' },
			],
			extra: [
				'https://mechadock.com/wp-content/uploads/2021/09/d7e58e1253423915d9cbbc0638de5bf5-768x576.jpeg',
				'https://mechadock.com/wp-content/uploads/2021/09/6a05fff3b9ad0c0f331414e70436a193-768x512.jpeg',
				'https://mechadock.com/wp-content/uploads/2021/09/e118c31984946f94df34235edfd00563-768x512.jpeg',
				'https://mechadock.com/wp-content/uploads/2021/09/ce4058ba5a82797ae91489f6bb927ecb-768x1024.jpeg',
				'https://mechadock.com/wp-content/uploads/2021/09/99207f7bdc0917e027f317ffdea32410-768x1024.jpeg',
				'https://mechadock.com/wp-content/uploads/2021/09/ff4b3eae4b3facd6964c8bcea894969f-768x576.jpeg',
				'https://mechadock.com/wp-content/uploads/2021/09/df122fea37a37cebf571c4a4033f14ba-768x1024.jpeg',
			],
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