<template>
  <base-card class="boxStyling">
    <div class="is-flex is-justify-content-center">
      <div class="width centerContent">
        <h1 class="has-text-weight-bold is-size-4" @click="toggleView">
          {{ title }}
        </h1>
      </div>

      <div class="width rightContent">
        <font-awesome-icon
          :icon="isVisible ? 'chevron-up' : 'chevron-down'"
          class="mr-2"
        />
      </div>
    </div>
    <div :class="isVisible ? '' : 'hide'">
      <settings-item
        class="mb-3"
        v-for="entry in data"
        :key="entry.name"
        :name="entry.name"
        :description="entry.description"
        :value="entry.value"
        :valueType="entry.value_type"
        :requiredPermissions="entry.required_permissions"
      />
    </div>
  </base-card>
</template>

<script>
import SettingsItem from './SettingsItem';

export default {
  props: {
    title: {
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
.boxStyling {
  background-color: #4e5172;
  color: #f8f8ff;
}

.hide {
  display: none;
}

.width {
  width: 33%;
}

.centerContent {
  text-align: center;
  margin-left: 33%;
}

.rightContent {
  text-align: right;
  align-self: center;
}
</style>