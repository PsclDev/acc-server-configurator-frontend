<template>
  <div class="container">
    <h1 class="has-text-left has-text-link has-text-weight-bold is-size-5">
      {{ name }}
    </h1>
    <p v-html="description" class="has-text-left is-size-7 mb-2" />
    <div class="container is-flex">
      <font-awesome-icon
        :icon="permissions ? 'user-shield' : 'user-cog'"
        :class="permissions ? 'has-text-primary' : ''"
        class="mr-2 is-align-self-center"
      />
      <input
        class="input is-small"
        :class="permissions ? 'is-primary' : ''"
        :disabled="hasAdminRights"
        :type="valueType"
        :value="value"
        @blur="changeValue"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    requiredPermissions: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    category: {
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
      type: [String, Number, Boolean],
      required: true
    }
  },
  computed: {
    permissions() {
      if (this.requiredPermissions.toLowerCase() === 'admin') return true;
      return false;
    },
    hasAdminRights() {
      const userPermission = this.$store.getters['auth/userPermissions'];
      if (userPermission.toLowerCase() === 'admin') return true;
      return false;
    }
  },
  methods: {
    async changeValue(e) {
      const value = e.target.value;
      await this.$store.dispatch('editor/changeValue', {
        category: this.category,
        name: this.name,
        value
      });
    }
  }
};
</script>