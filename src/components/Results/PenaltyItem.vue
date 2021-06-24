<template>
  <p>{{ driverName }}</p>
  <p>{{ penalty.reason }}</p>
  <p>{{ penalty.penalty }}</p>
  <p>{{ penalty.violationInLap }}</p>
  <p>{{ penalty.clearedInLap }}</p>
</template>

<script>
export default {
  props: ['driverName', 'penalty']
};
</script>