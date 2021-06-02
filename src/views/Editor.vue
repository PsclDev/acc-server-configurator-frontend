<template>
  <div>
    <base-collapse title="Racetracks">
      <racetrack-list />
    </base-collapse>

    <base-collapse title="Assist Rules">
      <settings-list :data="assistRules" />
    </base-collapse>

    <base-collapse title="Configuration">
      <settings-list :data="configuration" />
    </base-collapse>

    <base-collapse title="Event">
      <settings-list :data="event" />
    </base-collapse>

    <base-collapse title="Event Rules">
      <settings-list :data="eventRules" />
    </base-collapse>

    <base-collapse title="Settings">
      <settings-list :data="settings" />
    </base-collapse>

    <button class="button is-primary is-medium">
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
      await this.$store.dispatch('editor/getEditorContent');
    }
  },
  async created() {
    this.loadData();
  }
};
</script>