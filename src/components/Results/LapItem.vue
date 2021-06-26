<template>
  <base-card class="py-2 px-5 is-flex">
    <div
      class="is-flex is-flex-direction-column is-justify-content-space-around"
    >
      <div class="is-flex is-flex-direction-column">
        <p class="has-text-weight-bold is-size-7">Driver:</p>
        <p>{{ driverName }}</p>
      </div>

      <div class="is-flex is-flex-direction-column">
        <p class="has-text-weight-bold is-size-7">Valid Lap?</p>
        <p :class="validLap === 'Yes' ? 'has-text-success' : 'has-text-danger'">
          {{ validLap }}
        </p>
      </div>
    </div>

    <div
      class="ml-5 is-flex is-justify-content-space-around is-align-items-center"
    >
      <div class="is-flex is-flex-direction-column mr-5">
        <p class="has-text-weight-bold is-size-7">Laptime:</p>
        <p>{{ lap.laptime }}</p>
      </div>

      <div
        class="is-flex is-flex-direction-column is-justify-content-space-around"
      >
        <div class="is-flex is-flex-direction-column">
          <p class="has-text-weight-bold is-size-7">Sector 1:</p>
          <p>{{ lap.splits.sectorOne }}</p>
        </div>

        <div class="is-flex is-flex-direction-column">
          <p class="has-text-weight-bold is-size-7">Sector 2:</p>
          <p>{{ lap.splits.sectorTwo }}</p>
        </div>

        <div class="is-flex is-flex-direction-column">
          <p class="has-text-weight-bold is-size-7">Sector 3:</p>
          <p>{{ lap.splits.sectorThree }}</p>
        </div>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ['driverName', 'lap'],
  computed: {
    validLap() {
      if (this.lap.isValidForBest) return 'Yes';
      else return 'No';
    }
  }
};
</script>