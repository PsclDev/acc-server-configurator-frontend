<template>
  <div class="container has-text-white is-flex is-justify-content-center bg">
    <img class="racetrackImage" :src="racetrackImage" />
    <div>
      <div class="is-flex is-align-items-center">
        <img class="flagImage mr-4" :src="flagImage" />
        <h1 class="has-text-weight-bold">{{ name }}</h1>
      </div>
      <div class="mt-3">
        <p class="has-text-left">Section: {{ section }}</p>
        <p class="has-text-left">KM: {{ km }}</p>
        <p
          class="has-text-left"
          :class="dlc !== 'None' ? 'has-text-link has-text-weight-bold' : ''"
        >
          DLC Required: {{ dlc }}
        </p>
        <div class="control">
          <label
            class="radio"
            v-for="variation in variations"
            :key="variation.name"
          >
            <input type="radio" name="variation" :key="variation.trackId" />
            {{ variation.name }}
          </label>
        </div>
        <a
          v-if="!isSelected"
          class="button is-outlined is-link mt-4"
          @click="selectTrack"
          >Select Track</a
        >
        <a v-else class="button is-primary mt-4" @click="selectTrack"
          >Selected</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    selected: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    section: {
      type: String,
      required: true
    },
    trackimage: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    km: {
      type: String,
      required: true
    },
    dlc: {
      type: String,
      required: true
    },
    variations: {
      type: Array,
      required: true
    }
  },
  computed: {
    isSelected() {
      return this.selected;
    },
    racetrackImage() {
      return require(`../../assets/images/racetracks/${this.trackimage}`);
    },
    flagImage() {
      return require(`../../assets/images/country-flags/${this.location}.svg`);
    }
  },
  methods: {
    selectTrack() {
      this.isSelected = !this.isSelected;
      this.$emit('trackSelected', this.name);
    }
  }
};
</script>

<style scoped>
.bg {
  background-color: #4e5172;
}

.racetrackImage {
  align-self: center;
  width: 200px;
  height: 200px;
}

.flagImage {
  max-width: 15%;
}
</style>