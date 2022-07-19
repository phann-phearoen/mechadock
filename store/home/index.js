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
			spec:
			{
				ホイール: 'アドバンテージ　イグザクト',
				リヤショック: 'ナイトロン',
				ブレーキ: 'ゲイルスピード' ,
			},
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
			spec:
			{ 
				ピストン: 'ヴォスナー850cc',
				カム: 'ヨシムラＳＴ－１',
				キャブ: 'FCR35',
				マフラー: 'S.S.ITO 4-2-1メガホン',
				ステップ: 'S.S.ITOバックステップ',
				Ｆフォーク: 'KYB38ф',
				リヤショック: 'ナイトロンＲ3',
				ホイール: 'JBマグタンJB-4　2.75-18　4.00-18',
				キャリパー: '前後ブレンボ',
				キャリパーサポート: '前後S.S.ITO',
				Ｆディスク: 'サンスタープレミアムレーシング320',
				Ｒディスク: 'サンスターZ1Rタイプ250'
			},
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
			spec:
			{ 
				Ｆフォーク: 'JB-KYB38',
				ステムキット: 'JB',
				Ｆブレーキ: 'ブレンボ4Ｐレーシング',
				Ｒディスク: 'サンスタープレミアムレーシング320ф',
				Ｆディスク: 'サンスター250ф',
				Ｒブレーキ: 'ブレンボ2Ｐ',
				ホイール: 'JB-1 275-18 400-18',
				マフラー: 'バンス＆ハインズ',
				キャブレター: 'CRM-33ф',
				ピストン: 'コスワース75ф',
				スィングアーム: 'JBスクエアタイプ',
				Ｒショック: 'ナイトロンR1',
			},
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
			model: 'Z650B 2',
			img: 'https://mechadock.com/wp-content/uploads/2018/02/20110808_004_001.jpg',
			owner: '畑中仁',
			spec:
			{ 
				フロントフォーク: 'FZR750',
				フロントホイル: 'FZR750',
				リヤホイル: 'FZR750',
				スイングアーム: 'FZR750',
				マフラー: 'Kファクトリー＆baby face',
				キャブレター: 'FCR35φ',
				リヤショック: 'アドバンテージショウワ　等',
			},
			extra: [
				'https://mechadock.com/wp-content/uploads/2018/02/20110808_004_003_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/02/20110808_004_002_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/02/20110808_004_001_cube_s.jpg',
			],
		},
		{
			model: 'GSX750E 4',
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20110808_009_001.jpg',
			owner: '赤塚君',
			spec:
			{ 
				フロントフォーク: 'バンディッド400',
				フロントホイル: 'GSXR400R',
				リヤホイル: 'GSXR400R',
				スイングアーム: 'STD',
				マフラー: 'モリワキ＋ヨシムラ',
				キャブレター: 'FCR35φ',
				リヤショック: 'オーリンズ　等',
			},
			extra: [
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_009_004_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_009_005_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_009_006_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_009_006_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_009_007_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_009_008_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_009_009_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_009_001_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_009_002_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_009_003_cube_s.jpg',
			],
		},
		{
			model: 'GSX750E 1',
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20110808_003_001.jpg',
			owner: '和田G',
			spec:
			{
				フロントフォーク: 'GSF1200',
				フロントホイル: 'GSF1200',
				リヤホイル: 'GSF1200',
				スイングアーム: 'GSF1200',
				マフラー: 'ナイトロレーシング',
				キャブレター: 'FCR39φ',
				リヤショック: 'オーリンズ　等',
			},
			extra: [
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_003_004_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_003_005_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_003_006_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_003_007_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_003_008_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_003_009_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_003_001_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_003_002_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20110808_003_003_cube_s.jpg',
			],
		},
		{
			model: 'V-MAX 1200',
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_001.jpg',
			owner: '田尾氏',
			spec:
			{
				Phase: `レーシングステップ
					F.Rブレーキローター　BRAKING ウエーブ
					ブレーキ＆クラッチマスターBREMBO ラジアル`,
				その他:`GEKKOステッピングタコメーター
					武川　スクエアLCDパワーテストスピードメータ
					マルチリフレクターレンズ
					LEDセクターテール2`,
				'2012/7/8': 'タコメーター、ウィンカー、ミラー変更しました。',
				タコメーター: 'スタック',
				ウィンカー: `ＦＡＲウィンカーミラー
					アクティブライセンスホルダー付き
					ＬＥＤウィンカー
					`,
			},
			extra: [
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_005_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_006_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_007_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_008_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_009_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_010_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_010_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_011_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_012_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_013_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_014_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_015_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_016_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_017_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_001_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_002_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20111021_001_003_cube_s.jpg',
			],
		},
		{
			model: 'GSX750S3改',
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_001.jpg',
			owner: 'Ｋ氏',
			comment: `
				調子が悪いとのことで来店され、各部を点検していくうちに 次々と問題が発覚し、
				フレームからの交換となりました。 現在はオーナー曰く、とても扱いやすいバイクに生まれ変わったとのことです。
				たまたま当店に部品取り車があったため、費用もかなり抑えることができました。
			`,
			spec:
			{ 
				マフラー: 'ノジマ',
				キャブレター: 'ＦＣＲ41',
				エンジン: 'ＧＳＦ1200',
				点火系: 'ＡＳウオタニＳＰ2',
				車体周り: '',
				Ｆフォーク: 'ＧＳＦ1200',
				Ｆブレーキ: 'ブレンボキャスティング',
				Ｆホイール: 'ＧＳＦ1200',
				スイングアーム: 'ＧＳＦ1200',
				Ｒショック: 'ＧＳＦ1200',
				Ｒブレーキ: 'ＧＳＦ1200',
				スピードメーター: 'アクティブ',
				タコメーター: 'ピボット',
				ハンドル: 'トマゼリ',
			},
			extra: [
				'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_001_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_002_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_003_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_004_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_005_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_006_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_007_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_008_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_009_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_010_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_011_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20120910_001_012_cube_s.jpg',
			],
		},
		{
			model: 'KAWASAKI Z1',
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_001.jpg',
			owner: '田尾氏',
			comment: `オーナーさんも大満足の1台になりました。`,
			spec:
			{
				ハンドル: 'ポッシュ',
				ブレーキレバー: 'ゲイルスピード',
				クラッチレバー: 'ゲイルスピード',
				ブレーキ: 'ブレンボ',
				ディスク: 'サンスター',
				キャブレター: 'FCR33',
				ホイール: 'JBマグ鍛',
				マフラー: 'ナイトロレーシング',
				フォーク: 'カヤバ38',
				リヤショック: 'ナイトロン',
				その他多数: '',
			},
			extra: [
				'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_003_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_004_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_005_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_006_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_007_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_008_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_009_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_010_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_011_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_012_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_001_cube_s.jpg',
				'https://mechadock.com/wp-content/uploads/2018/01/20160607_001_002_cube_s.jpg',
			],
		},
		{
			model: 'ゼファー1100',
			img: 'https://mechadock.com/wp-content/uploads/2017/11/20120530_001_001.jpg',
			owner: 'O氏',
			spec:
			{
				マフラー: 'ストライカー',
				キャブレター: 'FCR39/DNAフィルター',
				バックステップ: 'ストライカー',
				リアショック: 'オーリンズ36PR1C1L',
				オイルクーラー: 'アクティブラウンドタイプ',
				ハンドル: 'POSHスーパーロー',
				'R,Lマスター': 'NISSINラジアル',
				'6/23追加': '',
				Fフォーク: 'オーリンズ',
				ライトステー: 'POSH',
			},
			extra: [
				'https://mechadock.com/wp-content/uploads/2017/11/20120530_001_003.jpg',
				'https://mechadock.com/wp-content/uploads/2017/11/20120530_001_004.jpg',
				'https://mechadock.com/wp-content/uploads/2017/11/20120530_001_005.jpg',
			],
		},
	],
	reports: [
		{
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20140904_001_001_cube_s.jpg',
			title: '2014　十勝スピードウェイ　バイクフェスティバル　動画',
			lead: 'ウェアラブルカメラで撮った動画です。',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2017/07/20170715_001_001_mid.jpg',
			title: '2017 うに丼ツーリング',
			lead: '去年、一昨年と雨に降られて 中止になって',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2016/07/20160719_001_001_cube_s.jpg',
			title: '2016 十勝エコグランプリ・バイクでエコ3H耐久',
			lead: '7月18日（祝月）十勝サーキットで行われ',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2015/11/20151121_001_001_cube_s.jpg',
			title: 'メカドック忘年会2015',
			lead: '１１月１４日（土）手稲の花ごころでメカドックの忘年会を開催しました。',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20140924_001_001_cube_s.jpg',
			title: '2014 Bike de ECO・ワンタンGrando Prix 3Hours',
			lead: '９／２３（火）　十勝スピードウェイで Bike de ECO・ワンタンGrando Prix 3Hours　が開催されました。',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20140902_001_001_cube_s.jpg',
			title: '2014 十勝スピードウェイ　バイクフェスティバル',
			lead: '8/30,31　十勝スピードウェイでバイクフェスティバルが開催されました。',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20140719_001_001_cube_s.jpg',
			title: 'ダンロップ・サーキットステーション　ＩＮ　十勝スピードウェイ',
			lead: '７/１３（日）　十勝スピードウェイでダンロップ・サーキットステーションが開催されました。',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20140630_001_001_cube_s.jpg',
			title: '2014 ウニ丼ツーリング',
			lead: '6/29（日）毎年恒例のウニ丼ツーリングに行ってきました！',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20130710_001_001_cube_s-1.jpg',
			title: '2013 ウニ丼ツーリング (2)',
			lead: '6/30（日）ウニ丼ツーリングに行ってきました。',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20121023_001_001_cube_s.jpg',
			title: '2012 秋ツーリング',
			lead: '１０月７日（日）秋のツーリングに行ってきました。',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20120820_001_001_cube_s.jpg',
			title: '2012　十勝バイクフェスティバル',
			lead: '８月１８日、１９日で十勝サーキットで開かれた、十勝バイクフェスティバルへ行ってきました。',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20120815_001_001_cube_s.jpg',
			title: 'お盆ツーリング　2012',
			lead: '今年も８月１１日、１２日の日程で糠平に行ってきました。',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20120702_001_001_cube_s.jpg',
			title: '2012 7月1日　うに丼ツーリング',
			lead: '毎年、恒例のうに丼ツーリング。',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20110921_001_001_cube_s-1.jpg',
			title: 'お盆ツーリング',
			lead: 'メカドックでは毎年お盆ツーリングで糠平に行っています。',
		},
		{
			img: 'https://mechadock.com/wp-content/uploads/2018/01/20110805_004_001_cube_s.jpg',
			title: '十勝KUSAレース4時間耐久',
			lead: '2008 10/12於：十勝スピードウェイ',
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