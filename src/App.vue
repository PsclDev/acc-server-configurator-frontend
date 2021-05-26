<template>
  <TheHeader />
  <Authentication v-if="!isLoggedIn" />
  <Editor v-else />
</template>

<script>
import TheHeader from './components/Layout/TheHeader';
import Authentication from './views/Authentication';
import Editor from './views/Editor';

export default {
  components: {
    TheHeader,
    Authentication,
    Editor
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isAuthenticated'];
    }
  },
  created() {
    this.$store.dispatch('auth/tryLogin');
  }
};
</script>
