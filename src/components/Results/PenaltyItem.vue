<template>
  <base-card class="py-2 px-5 is-flex">
    <div
      class="is-flex is-flex-direction-column is-justify-content-space-around"
    >
      <div class="is-flex is-flex-direction-column">
        <p class="has-text-weight-bold is-size-7">Reason:</p>
        <p>{{ penalty.reason }}</p>
      </div>

      <div class="is-flex is-flex-direction-column">
        <p class="has-text-weight-bold is-size-7">Penalty:</p>
        <p>{{ penalty.penalty }}</p>
      </div>
    </div>

    <div
      class="
        ml-5
        is-flex is-flex-direction-column is-justify-content-space-around
      "
    >
      <div class="is-flex is-flex-direction-column is-size-7">
        <p class="has-text-weight-bold">Driver:</p>
        <p>{{ driverName }}</p>
      </div>

      <div class="is-flex is-flex-direction-column is-size-7">
        <p class="has-text-weight-bold">Violation in Lap:</p>
        <p>{{ penalty.violationInLap }}</p>
      </div>

      <div class="is-flex is-flex-direction-column is-size-7">
        <p class="has-text-weight-bold">Cleared in Lap:</p>
        <p>{{ penalty.clearedInLap }}</p>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ['driverName', 'penalty']
};
</script>