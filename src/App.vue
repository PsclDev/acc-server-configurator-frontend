<template>
  <TheHeader />
  <Authentication v-if="!isLoggedIn" />
  <Main v-else />
  <TheFooter class="mt-5" />
</template>

<script>
import TheHeader from './components/Layout/TheHeader';
import TheFooter from './components/Layout/TheFooter';
import Authentication from './pages/Authentication';
import Main from './pages/Main';

export default {
  components: {
    TheHeader,
    TheFooter,
    Authentication,
    Main
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
