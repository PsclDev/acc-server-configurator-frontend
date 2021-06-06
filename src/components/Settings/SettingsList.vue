<template>
  <settings-item
    class="mb-3"
    :category="category"
    v-for="entry in data"
    :key="entry.name"
    :name="entry.name"
    :description="entry.description"
    :value="entry.value"
    :valueType="entry.value_type"
    :requiredPermissions="entry.required_permissions"
  />
</template>

<script>
import SettingsItem from './SettingsItem';

export default {
  props: {
    category: {
      type: String,
      required: true
    },
    data: {
      type: Array,
      required: true
    }
  },
  components: {
    SettingsItem
  }
};
</script>