<template>
  <p>{{ driverName }}</p>
  <p>{{ lap.laptime }}</p>
  <p>{{ lap.isValidForBest }}</p>
  <p>Best Split</p>
  <p>{{ lap.splits.sectorOne }}</p>
  <p>{{ lap.splits.sectorTwo }}</p>
  <p>{{ lap.splits.sectorThree }}</p>
</template>

<script>
export default {
  props: ['driverName', 'lap']
};
</script>