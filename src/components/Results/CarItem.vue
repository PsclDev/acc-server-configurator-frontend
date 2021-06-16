<template>
  <p>Teamname: Porsche Werks Team</p>
  <p>Car: Porsche</p>
  <p>Racenumber: 911</p>
  <p>Best Lap: 1:00:00</p>
  <p>Best Split</p>
  <p>Split 1: 00:20:00</p>
  <p>Split 2: 00:20:00</p>
  <p>Split 3: 00:20:00</p>
  <p>Total Time: 01:00:00</p>
  <p>Lap Count: 1</p>
  <p>Mandatory Pitstop missed?: No</p>

  <driver-item v-for="driver in drivers" :key="driver" />
  <lap-item v-for="driver in drivers" :key="driver" />
  <penalty-item v-for="driver in drivers" :key="driver" />
</template>

<script>
import DriverItem from './DriverItem.vue';
import LapItem from './LapItem.vue';
import PenaltyItem from './PenaltyItem.vue';

export default {
  components: {
    DriverItem,
    LapItem,
    PenaltyItem
  },
  data() {
    return {
      drivers: [1, 2]
    };
  }
};
</script>