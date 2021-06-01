<template>
  <TheNavbar />
  <router-view class="mt-5"></router-view>
</template>

<script>
import TheNavbar from '../components/Layout/TheNavbar';

export default {
  components: {
    TheNavbar
  }
};
</script>
