<template>
  <button v-if="isLoading" class="button is-large is-ghost is-loading">
    Loading
  </button>
  <result-item
    v-else
    v-for="result in results"
    :key="result.name"
    :result="result"
  />
</template>

<script>
import ResultItem from '../components/Results/ResultItem';

export default {
  components: {
    ResultItem
  },
  data() {
    return {
      isLoading: false
    };
  },
  methods: {
    async loadData() {
      this.isLoading = true;
      await this.$store.dispatch('results/loadResults');
      this.isLoading = false;
    }
  },
  computed: {
    results() {
      return this.$store.getters['results/getResults'];
    }
  },
  async created() {
    this.loadData();
  }
};
</script>