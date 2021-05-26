<template>
  <div class="container">
    <button class="button is-danger is-light" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    }
  }
};
</script>