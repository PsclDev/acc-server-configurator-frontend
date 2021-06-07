<template>
  <base-collapse :title="raceTitle">
    <div class="container">
      <p>
        Best Lap:
        {{ bestLap }}
      </p>
      <p>Best Splits:</p>
      <p>Split 1: {{ bestSplitS1 }}</p>
      <p>Split 2: {{ bestSplitS2 }}</p>
      <p>Split 3: {{ bestSplitS3 }}</p>
      <p>Wet Session? {{ wetSession }}</p>
    </div>
  </base-collapse>
</template>

<script>
export default {
  props: ['result'],
  computed: {
    raceTitle() {
      return this.result.name;
    },
    bestLap() {
      return this.result.data.sessionResult.bestlap;
    },
    bestSplitS1() {
      return this.result.data.sessionResult.bestSplits[0];
    },
    bestSplitS2() {
      return this.result.data.sessionResult.bestSplits[1];
    },
    bestSplitS3() {
      return this.result.data.sessionResult.bestSplits[2];
    },
    wetSession() {
      const value = this.result.data.sessionResult.isWetSession;

      if (value === 0) return 'No';
      else return 'Yes';
    }
  }
};
</script>