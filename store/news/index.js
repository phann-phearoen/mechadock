import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export const state = () => ({
  dummy: [
    {
      title: '休業日のお知らせ',
      contents: `
        <div>6/26（日）6/29（水）は休業いたします。</div>
        <div>ご不便をおかけしますが</div>
        <div>よろしくお願いいたします。</div>`,
      date: '2022-06-22',
    },
    {
      title: 'Kawasaki　Z1R　1型入荷！',
      contents: `
        <img
          src="https://mechadock.com/wp-content/uploads/2022/06/image_50453761-320x240.jpg"
          style="display: block; max-width: 100%; min-width: 300px; margin: auto;"
        >
        <img
          src="https://mechadock.com/wp-content/uploads/2022/06/image_50458881-768x576.jpg"
          style="display: block; max-width: 100%; min-width: 300px; margin: auto;"
        >
        <img
          src="https://mechadock.com/wp-content/uploads/2022/06/image_67511553-768x1024.jpg"
          style="display: block; max-width: 100%; min-width: 300px; margin: auto;"
        >
        <video
          src="https://mechadock.com/wp-content/uploads/2022/06/f8dbdee292a4d2dede475c52e20f4ae1.mp4"
          type="video/mp4"
          playsinline
          preload
          controls
          style="max-width: 100%; min-width: 300px; display: block; margin: auto;"
        ></video>
      `,
      date: '2022-06-07'
    },
    {
      title: 'カスタムバイクにSUZUKI　SV650Xを追加しました',
      contents: `
        <img
          src="https://mechadock.com/wp-content/uploads/2022/05/850_5283-2048x1362.jpg"
          style="display: block; max-width: 100%; min-width: 300px; margin: auto;"
        >
      `,
      date: '2022-05-10',
    },
    {
      title: 'カスタムバイクに　Kawasaki　Z650追加しました。',
      contents: `
        <img
          src="https://mechadock.com/wp-content/uploads/2021/11/850_4575-3-768x512.jpg"
          style="display: block; max-width: 100%; min-width: 300px; margin: auto;"
        >
      `,
      date: '2021-11-09',
    },
    {
      title: 'カスタムバイクにGS1000S追加しました！',
      contents: `
        <div>カスタムバイクに</div>
        <div>Suzuki　GS1000S追加しました</div>
      `,
      date: '2021-09-25',
    },
    {
      title: '休業日のお知らせ',
      contents: `
        <div>6/26（日）6/29（水）は休業いたします。</div>
        <div>ご不便をおかけしますが</div>
        <div>よろしくお願いいたします。</div>`,
      date: '2022-06-22',
    },
    {
      title: 'Kawasaki　Z1R　1型入荷！',
      contents: `
        <img
          src="https://mechadock.com/wp-content/uploads/2022/06/image_50453761-320x240.jpg"
          style="display: block; max-width: 100%; min-width: 300px; margin: auto;"
        >
        <img
          src="https://mechadock.com/wp-content/uploads/2022/06/image_50458881-768x576.jpg"
          style="display: block; max-width: 100%; min-width: 300px; margin: auto;"
        >
        <img
          src="https://mechadock.com/wp-content/uploads/2022/06/image_67511553-768x1024.jpg"
          style="display: block; max-width: 100%; min-width: 300px; margin: auto;"
        >
        <video
          src="https://mechadock.com/wp-content/uploads/2022/06/f8dbdee292a4d2dede475c52e20f4ae1.mp4"
          type="video/mp4"
          playsinline
          preload
          controls
          style="max-width: 100%; min-width: 300px; display: block; margin: auto;"
        ></video>
      `,
      date: '2022-06-07'
    },
  ],
});

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters,
};
