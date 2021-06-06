<template>
  <div class="is-flex is-justify-content-center mb-5 mt-5">
    <div class="width centerContent">
      <a
        :class="
          activeTab === '/results' ? 'has-text-white' : 'has-text-grey-dark'
        "
        class="mx-5 is-size-5"
        @click="results"
      >
        Results
      </a>
      <a
        :class="
          activeTab === '/entrylist' ? 'has-text-white' : 'has-text-grey-dark'
        "
        class="mx-5 is-size-5"
        @click="entrylist"
      >
        Entry List
      </a>
      <a
        :class="
          activeTab === '/settings' ? 'has-text-white' : 'has-text-grey-dark'
        "
        class="mx-5 is-size-5"
        @click="settings"
      >
        Settings
      </a>
    </div>

    <div class="width rightContent">
      <a class="has-text-primary mx-5 is-size-5" @click="logout"> Logout </a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    activeTab() {
      return this.$store.getters['app/activeTab'];
    }
  },
  methods: {
    entrylist() {
      this.$router.push('/entrylist');
    },
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