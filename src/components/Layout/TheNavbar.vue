<template>
  <div class="is-flex is-justify-content-center mb-5">
    <div class="width centerContent">
      <a
        :class="
          activeTab === 'results' ? 'has-text-white' : 'has-text-grey-dark'
        "
        class="mx-5"
        @click="results"
      >
        Results
      </a>
      <a
        :class="
          activeTab === 'settings' ? 'has-text-white' : 'has-text-grey-dark'
        "
        class="mx-5"
        @click="settings"
      >
        Settings
      </a>
    </div>

    <div class="width rightContent">
      <a class="has-text-primary mx-5" @click="logout"> Logout </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: ''
    };
  },
  methods: {
    settings() {
      this.activeTab = 'settings';
      this.$router.push('/settings');
    },
    results() {
      this.activeTab = 'results';
      this.$router.push('/results');
    },
    logout() {
      this.$store.dispatch('auth/logout');
    }
  }
};
</script>

<style scoped>
.width {
  width: 33%;
}

.centerContent {
  text-align: center;
  margin-left: 33%;
}

.rightContent {
  text-align: right;
}
</style>