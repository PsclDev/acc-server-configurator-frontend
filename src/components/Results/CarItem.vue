<template>
  <div v-bind:style="{ 'background-color': `${bgColor}` }">
    <div class="is-flex is-justify-content-space-around">
      <div
        class="is-flex is-flex-direction-column is-justify-content-space-around"
      >
        <div class="is-flex is-flex-direction-column">
          <p class="has-text-weight-bold">Model:</p>
          <p>{{ car.name }}</p>
        </div>

        <div class="is-flex is-flex-direction-column">
          <p class="has-text-weight-bold">Teamname:</p>
          <p>{{ car.teamName }}</p>
        </div>

        <div class="is-flex is-flex-direction-column">
          <p class="has-text-weight-bold">Racenumber:</p>
          <p>{{ car.raceNumber }}</p>
        </div>
      </div>

      <div
        class="is-flex is-justify-content-space-around is-align-items-center"
      >
        <div class="is-flex is-flex-direction-column mr-5">
          <p class="has-text-weight-bold">Best Lap:</p>
          <p :class="bestLapTime ? 'bestTime' : ''">{{ car.bestLap }}</p>
        </div>

        <div
          class="
            is-flex is-flex-direction-column is-justify-content-space-around
          "
        >
          <div class="is-flex is-flex-direction-column">
            <p class="has-text-weight-bold">Sector 1:</p>
            <p :class="bestSectorOne ? 'bestTime' : ''">
              {{ car.bestSplits.sectorOne }}
            </p>
          </div>

          <div class="is-flex is-flex-direction-column">
            <p class="has-text-weight-bold">Sector 2:</p>
            <p :class="bestSectorTwo ? 'bestTime' : ''">
              {{ car.bestSplits.sectorTwo }}
            </p>
          </div>

          <div class="is-flex is-flex-direction-column">
            <p class="has-text-weight-bold">Sector 3:</p>
            <p :class="bestSectorThree ? 'bestTime' : ''">
              {{ car.bestSplits.sectorThree }}
            </p>
          </div>
        </div>
      </div>

      <div
        class="is-flex is-flex-direction-column is-justify-content-space-around"
      >
        <div class="is-flex is-flex-direction-column">
          <p class="has-text-weight-bold">Total Time:</p>
          <p>{{ car.totalTime }}</p>
        </div>

        <div class="is-flex is-flex-direction-column">
          <p class="has-text-weight-bold">Driven laps:</p>
          <p>{{ car.lapCount }}</p>
        </div>

        <div class="is-flex is-flex-direction-column">
          <p class="has-text-weight-bold">Missed Mandatory Pitstop?</p>
          <p>{{ pitstop }}</p>
        </div>
      </div>
    </div>

    <div class="mt-5">
      <h3 class="has-text-weight-bold is-size-4">Drivers</h3>

      <div class="is-flex is-justify-content-space-around is-flex-wrap-wrap">
        <driver-item
          class="my-1"
          v-for="driver in car.drivers"
          :key="driver.id"
          :driver="driver"
        />
      </div>
    </div>

    <base-collapse
      title="Laps"
      @collapsedChanged="collapseChangedLaps"
      v-bind:style="{ 'background-color': `${bgColor}` }"
    >
      <button v-if="isLoadingLaps" class="button is-large is-ghost is-loading">
        Loading
      </button>
      <div
        v-else-if="!isLoadingLaps && laps.length > 0"
        class="is-flex is-justify-content-space-around is-flex-wrap-wrap"
      >
        <lap-item
          v-for="lap in laps"
          :key="lap"
          :lap="lap"
          :driverName="getDriverName(lap.driverIndex)"
        />
      </div>
      <p v-else>No Laps found</p>
    </base-collapse>

    <base-collapse
      title="Penalties"
      @collapsedChanged="collapseChangedPenalties"
      v-bind:style="{ 'background-color': `${bgColor}` }"
    >
      <button
        v-if="isLoadingPenalties"
        class="button is-large is-ghost is-loading"
      >
        Loading
      </button>
      <div
        v-else-if="!isLoadingPenalties && penalties.length"
        class="is-flex is-justify-content-space-around is-flex-wrap-wrap"
      >
        <penalty-item
          v-for="penalty in penalties"
          :key="penalty"
          :penalty="penalty"
          :driverName="getDriverName(penalty.driverIndex)"
        />
      </div>
      <p v-else>No Penalties found</p>
    </base-collapse>
  </div>
</template>

<script>
import BaseCollapse from '../UI/BaseCollapse.vue';
import DriverItem from './DriverItem.vue';
import LapItem from './LapItem.vue';
import PenaltyItem from './PenaltyItem.vue';
import { mapGetters } from 'vuex';

export default {
  props: [
    'bgColor',
    'resultId',
    'car',
    'bestLapTime',
    'bestSectorOne',
    'bestSectorTwo',
    'bestSectorThree'
  ],
  components: {
    DriverItem,
    BaseCollapse,
    LapItem,
    PenaltyItem
  },
  data() {
    return {
      laps: [],
      isLoadingLaps: false,
      penalties: [],
      isLoadingPenalties: false
    };
  },
  computed: {
    pitstop() {
      if (parseInt(this.car.missingMandatoryPitstop) > 0) return 'Yes';
      else return 'No';
    },
    ...mapGetters('results', ['getLaps', 'getPenalties'])
  },
  methods: {
    async collapseChangedLaps() {
      if (this.laps.length > 0) return;
      this.isLoadingLaps = true;

      await this.$store.dispatch('results/loadLaps', {
        id: this.resultId,
        carId: this.car.id
      });

      const laps = this.getLaps(this.resultId);
      this.laps = laps;

      this.isLoadingLaps = false;
    },
    async collapseChangedPenalties() {
      if (this.penalties.length > 0) return;
      this.isLoadingPenalties = true;

      await this.$store.dispatch('results/loadPenalties', {
        id: this.resultId,
        carId: this.car.id
      });

      const penalties = this.getPenalties(this.resultId);
      this.penalties = penalties;

      this.isLoadingPenalties = false;
    },
    getDriverName(index) {
      return this.car.drivers[index].name;
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