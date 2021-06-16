<template>
  <base-collapse :title="raceTitle">
    <div class="container is-size-5">
      <div class="container is-flex is-justify-content-center">
        <p>Best Lap:</p>
        <p class="bestTime ml-2">
          {{ bestLap }}
        </p>
      </div>
      <p>Best Splits:</p>
      <div class="container is-flex is-justify-content-center">
        <p class="mr-5 bestLap">Split 1: {{ bestSplitS1 }}</p>
        <p class="mr-5 bestLap">Split 2: {{ bestSplitS2 }}</p>
        <p>Split 3: {{ bestSplitS3 }}</p>
      </div>

      <p class="mt-3">Weather: {{ wetSession }}</p>
    </div>

    <car-item />
  </base-collapse>
</template>

<script>
import CarItem from './CarItem.vue';

export default {
  components: {
    CarItem
  },
  props: ['result'],
  computed: {
    raceTitle() {
      return this.result.name;
    },
    bestLap() {
      return this.result.bestlap;
    },
    bestSplitS1() {
      return this.result.bestSplits.sectorOne;
    },
    bestSplitS2() {
      return this.result.bestSplits.sectorTwo;
    },
    bestSplitS3() {
      return this.result.bestSplits.sectorThree;
    },
    wetSession() {
      const value = this.result.isWetSession;

      if (value === 0) return 'Dry';
      else return 'Wet';
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.bestTime {
  color: $purple;
}
</style>