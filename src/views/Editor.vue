<template>
  <button v-if="isLoading" class="button is-large is-ghost is-loading">
    Loading
  </button>
  <div v-else>
    <base-collapse title="Racetracks">
      <racetrack-list />
    </base-collapse>

    <base-collapse title="Assist Rules">
      <settings-list category="assistRules" :data="assistRules" />
    </base-collapse>

    <base-collapse title="Configuration">
      <settings-list category="configuration" :data="configuration" />
    </base-collapse>

    <base-collapse title="Event">
      <settings-list category="event" :data="event" />
    </base-collapse>

    <base-collapse title="Event Rules">
      <settings-list category="eventRules" :data="eventRules" />
    </base-collapse>

    <base-collapse title="Settings">
      <settings-list category="settings" :data="settings" />
    </base-collapse>

    <button class="button is-primary is-medium" @click="commitChanges">
      Commit Changes to Server
    </button>
  </div>
</template>

<script>
import SettingsList from '../components/Settings/SettingsList';
import RacetrackList from '../components/Racetrack/RacetrackList';

export default {
  components: {
    SettingsList,
    RacetrackList
  },
  data() {
    return {
      isLoading: false
    };
  },
  computed: {
    assistRules() {
      return this.$store.getters['editor/assistRules'];
    },
    configuration() {
      return this.$store.getters['editor/configuration'];
    },
    event() {
      return this.$store.getters['editor/event'];
    },
    eventRules() {
      return this.$store.getters['editor/eventRules'];
    },
    settings() {
      return this.$store.getters['editor/settings'];
    }
  },
  methods: {
    async loadData() {
      this.isLoading = true;
      await this.$store.dispatch('editor/getEditorContent');
      this.isLoading = false;
    },
    async commitChanges() {
      this.isLoading = true;
      await this.$store.dispatch('editor/commitChangesToServer');
      this.isLoading = false;
    }
  },
  async created() {
    this.loadData();
  }
};
</script>