<template>
  <div class="container is-flex is-flex-wrap-wrap">
    <racetrack-item
      class="mb-5"
      v-for="track in getTracks"
      :key="track.name"
      :selected="track.selected"
      :name="track.name"
      :section="track.section"
      :trackimage="track.image"
      :location="track.location"
      :km="track.km"
      :dlc="track.dlc"
      @trackSelected="trackSelected"
    />
  </div>
</template>

<script>
import RacetrackItem from './RacketrackItem';
import { tracks } from '../../assets/data/racetracks.json';

export default {
  components: {
    RacetrackItem
  },
  data() {
    return {
      tracks
    };
  },
  computed: {
    getTracks() {
      return this.tracks;
    }
  },
  methods: {
    setTracks(newTracks) {
      this.tracks = newTracks;
      console.log(this.tracks);
    },
    trackSelected(trackName) {
      let tmpArr = [];

      for (const idx in tracks) {
        let track = tracks[idx];

        if (track.name === trackName) track.selected = true;
        else track.selected = false;
        tmpArr.push(track);
      }
      this.setTracks(tmpArr);
    }
  }
};
</script>