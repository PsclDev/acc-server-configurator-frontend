<template>
  <p>Teamname: Porsche Werks Team</p>
  <p>Car: Porsche</p>
  <p>Racenumber: 911</p>

  <driver-item v-for="driver in drivers" :key="driver" />
</template>

<script>
import DriverItem from './DriverItem.vue';

export default {
  components: {
    DriverItem
  },
  data() {
    return {
      drivers: [1, 2]
    };
  }
};
</script>