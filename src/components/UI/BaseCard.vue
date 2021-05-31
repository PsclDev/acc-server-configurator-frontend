<template>
  <div class="card" :style="'max-width:' + maxWidth + 'rem;'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    maxWidth: {
      type: String,
      default: '60'
    }
  }
};
</script>

<style scoped>
.card {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
}
</style>