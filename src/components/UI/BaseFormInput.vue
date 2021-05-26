<template>
  <div class="container">
    <div class="container is-flex is-align-items-center mb-1">
      <font-awesome-icon :icon="icon" class="mr-2" />
      <p>{{ title }}</p>
    </div>
    <input
      class="input"
      :class="validCheck ? 'is-danger' : ''"
      :type="inputType"
      v-model.trim="inputValue"
      @blur="$emit('inputValueChanged', this.inputValue)"
    />
    <p v-if="validCheck" class="has-text-danger">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    valid: {
      type: String,
      required: true
    },
    errorMessage: {
      type: String,
      required: true
    },
    inputType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      inputValue: ''
    };
  },
  computed: {
    validCheck() {
      return this.valid === 'invalid';
    }
  }
};
</script>