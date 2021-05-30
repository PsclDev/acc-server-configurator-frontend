<template>
  <div class="is-flex is-justify-content-center mb-5">
    <a class="has-text-white mx-5" @click="settings"> Settings </a>
    <a class="has-text-white mx-5" @click="results"> Results </a>
    <a class="has-text-primary mx-5" @click="logout"> Logout </a>
  </div>
</template>

<script>
export default {
  methods: {
    settings() {
      this.$router.push('/settings');
    },
    results() {
      this.$router.push('/results');
    },
    logout() {
      this.$store.dispatch('auth/logout');
    }
  }
};
</script>