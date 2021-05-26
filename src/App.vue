<template>
  <TheHeader />
  <Authentication v-if="!isLoggedIn" />
  <Editor v-else />
  <TheFooter />
</template>

<script>
import TheHeader from './components/Layout/TheHeader';
import TheFooter from './components/Layout/TheFooter';
import Authentication from './views/Authentication';
import Editor from './views/Editor';

export default {
  components: {
    TheHeader,
    TheFooter,
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
