<template>
  <div>
    <settings-list title="Assist Rules" :data="assistRules" />
    <settings-list title="Configuration" :data="configuration" />
    <settings-list title="Event" :data="event" />
    <settings-list title="Event Rules" :data="eventRules" />
    <settings-list title="Settings" :data="settings" />
    <button class="button is-primary is-medium">
      Commit Changes to Server
    </button>
  </div>
</template>

<script>
import SettingsList from '../components/Settings/SettingsList';

export default {
  components: {
    SettingsList
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
  async created() {
    await this.$store.dispatch('editor/getEditorContent');
  }
};
</script>