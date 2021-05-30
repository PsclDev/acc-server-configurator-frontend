<template>
  <base-card>
    <h1 class="has-text-weight-bold is-size-4" @click="toggleView">
      Settings List
    </h1>
    <settings-item :class="isVisible ? '' : 'hide'"></settings-item>
  </base-card>
</template>

<script>
import SettingsItem from './SettingsItem';

export default {
  components: {
    SettingsItem
  },
  data() {
    return {
      isVisible: false
    };
  },
  methods: {
    toggleView() {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style scoped>
.hide {
  display: none;
}
</style>