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

    <base-collapse title="Cars" @collapsedChanged="collapseChanged">
      <car-item
        v-for="car in cars"
        :key="car.id"
        :car="car"
        :bgColor="getBgColor(car.id)"
        :resultId="result.id"
        :bestLapTime="isBestTime(bestLap, car.bestLap)"
        :bestSectorOne="
          isBestTime(result.bestSplits.sectorOne, car.bestSplits.sectorOne)
        "
        :bestSectorTwo="isBestTime(bestSplitS2, car.bestSplits.sectorTwo)"
        :bestSectorThree="isBestTime(bestSplitS3, car.bestSplits.sectorThree)"
      />
    </base-collapse>
  </base-collapse>
</template>

<script>
import CarItem from './CarItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    CarItem
  },
  props: ['result'],
  data() {
    return {
      cars: null
    };
  },
  computed: {
    raceTitle() {
      return this.result.name;
    },
    bestLap() {
      return this.result.bestLap;
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
    },
    ...mapGetters('results', ['getCars'])
  },
  methods: {
    async collapseChanged() {
      if (this.cars !== null) return;
      const id = this.result.id;

      await this.$store.dispatch('results/loadCars', {
        id
      });

      const cars = this.getCars(id);
      this.cars = cars;
    },
    isBestTime(bestResult, carResult) {
      return bestResult === carResult;
    },
    getBgColor(id) {
      if (id % 2 === 0) return '#22222c';
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