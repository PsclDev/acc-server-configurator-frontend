<template>
  <div class="container">
    <h1 class="has-text-left is-size-5">Test Abc</h1>
    <p class="has-text-left is-size-7 mb-2">
      Hallo dies ist eine Testbeschreibung
    </p>
    <div class="container is-flex">
      <font-awesome-icon
        :icon="requiresAdmin ? 'user-shield' : 'user-cog'"
        :class="requiresAdmin ? 'has-text-primary' : ''"
        class="mr-2 is-align-self-center"
      />
      <input
        class="input is-small"
        :class="requiresAdmin ? 'is-primary' : ''"
        type="text"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    permissions: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    valueType: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    requiresAdmin() {
      if (this.permissions === 'admin') return true;
      return false;
    }
  }
};
</script>