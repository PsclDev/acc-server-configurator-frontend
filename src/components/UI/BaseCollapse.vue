<template>
  <base-card class="boxStyling">
    <div
      class="is-flex is-justify-content-center"
      :class="collapsed ? 'mb-3' : ''"
      @click="toggleView"
    >
      <div class="width centerContent">
        <h1 class="has-text-weight-bold is-size-4">
          {{ title }}
        </h1>
      </div>

      <div class="width rightContent">
        <font-awesome-icon
          :icon="collapsed ? 'chevron-up' : 'chevron-down'"
          class="mr-2"
        />
      </div>
    </div>
    <div :class="collapsed ? '' : 'hide'">
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
      collapsed: false
    };
  },
  methods: {
    toggleView() {
      this.collapsed = !this.collapsed;
      this.$emit('collapsedChanged', { collapsed: this.collapsed });
    }
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.boxStyling {
  background-color: $darkblue;
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