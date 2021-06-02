<template>
  <base-card class="boxStyling">
    <div
      class="is-flex is-justify-content-center"
      :class="isVisible ? 'mb-3' : ''"
      @click="toggleView"
    >
      <div class="width centerContent">
        <h1 class="has-text-weight-bold is-size-4">
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
      <slot></slot>
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
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