<template>
  <div>
    <p>{{ car.name }}</p>
    <p>{{ car.teamName }}</p>
    <p>{{ car.raceNumber }}</p>

    <p :class="bestLapTime ? 'bestTime' : ''">{{ car.bestLap }}</p>
    <p :class="bestSectorOne ? 'bestTime' : ''">
      {{ car.bestSplits.sectorOne }}
    </p>
    <p :class="bestSectorTwo ? 'bestTime' : ''">
      {{ car.bestSplits.sectorTwo }}
    </p>
    <p :class="bestSectorThree ? 'bestTime' : ''">
      {{ car.bestSplits.sectorThree }}
    </p>
    <p>{{ car.totalTime }}</p>
    <p>{{ car.lapCount }}</p>
    <p>{{ car.missingMandatoryPitstop }}</p>

    <base-collapse title="Drivers">
      <driver-item
        v-for="driver in car.drivers"
        :key="driver.id"
        :driver="driver"
      />
    </base-collapse>

    <base-collapse title="Laps" @collapsedChanged="collapseChangedLaps">
      <button v-if="isLoadingLaps" class="button is-large is-ghost is-loading">
        Loading
      </button>
      <div v-else-if="!isLoadingLaps && laps.length > 0">
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
    >
      <button
        v-if="isLoadingPenalties"
        class="button is-large is-ghost is-loading"
      >
        Loading
      </button>
      <div v-else-if="!isLoadingPenalties && penalties.length">
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