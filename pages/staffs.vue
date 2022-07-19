<template>
  <v-container class="demo-container">
    <v-card dark outlined>
      <v-card-title class="meka-title">STAFFS</v-card-title>
      <v-divider dark></v-divider>
      <v-card-text>
        <staff-card
          v-for="(staff, i) in staffs"
          :key="i"
          :staff="staff"
        ></staff-card>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import staffCard from '../components/staff-card.vue'
export default {
  components: { staffCard },
  data() {
    return {
      staffs: [
        {
          img: require(`~/assets/staffs/boss.jpeg`),
          name: '職人',
          nick: 'BOSS',
          intro: [
            'ビールは水。',
            '海は焼肉。',
            '休みは釣り。',
            '　',
            '職人。',
          ],
        },
        {
          img: require(`~/assets/staffs/staff1.jpeg`),
          name: '誰よりも美しく',
          nick: 'HIT',
          intro: [
            '誰よりも美しく取り付け',
            '細部までカッコよく。',
            '　',
            'カワサキヲタク。',
          ],
        },
        {
          img: require(`~/assets/staffs/staff2.jpeg`),
          name: 'Always Full Throttle.',
          nick: 'OBA',
          intro: [
            '縁の下の腕利きニョーボ。',
            '息子の母で店のハハ。',
            '止まることを知らないSHARK RIDER.',
            '　',
            'タメコミストに嫌われがちの',
            'ダンシャリスト。',
          ],
        },
      ],
    }
  }
}
</script>