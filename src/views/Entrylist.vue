<template>
  <base-card
    class="is-flex is-flex-direction-column is-justify-content-center bg"
  >
    <div>
      <h1 class="has-text-white is-size-4">New Entry</h1>
      <div class="is-flex mt-1">
        <input
          class="input mr-5"
          type="number"
          placeholder="Steam Id"
          v-model.trim="steamId"
        />
        <input
          class="input mr-5"
          type="number"
          placeholder="Racenumber"
          v-model.number="raceNumber"
        />
        <label class="has-text-white mr-5" id="checkbox">
          Serveradmin?
          <input type="checkbox" v-model="serveradmin" />
        </label>
        <button class="button is-primary" @click="addNewEntry">Add</button>
      </div>
    </div>

    <div
      class="is-flex is-justify-content-center is-flex-direction-column mt-5"
    >
      <h1 class="has-text-white is-size-4">Entry List</h1>
      <button v-if="isLoading" class="button is-large is-ghost is-loading">
        Loading
      </button>
      <table v-else class="table">
        <thead>
          <tr>
            <th>Steam ID</th>
            <th>Username</th>
            <th>Racenumber</th>
            <th>Is Server Admin?</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <entry-list-item
            v-for="entry in entries"
            :key="entry.playerID[0]"
            :steamId="entry.playerID[0]"
            :username="entry.username"
            :racenumber="entry.raceNumber"
            :admin="entry.isServerAdmin"
          />
        </tbody>
      </table>
    </div>
    <button
      class="button is-primary is-medium mt-5"
      @click="commitChangesToServer"
    >
      Commit Changes to Server
    </button>
  </base-card>
</template>

<script>
import EntryListItem from '../components/EntryList/EntryListItem';

export default {
  components: {
    EntryListItem
  },
  data() {
    return {
      isLoading: false,
      steamId: '',
      raceNumber: '',
      serveradmin: false
    };
  },
  methods: {
    async loadData() {
      this.isLoading = true;
      await this.$store.dispatch('entryList/loadEntrylist');
      this.isLoading = false;
    },
    async addNewEntry() {
      await this.$store.dispatch('entryList/addNewEntry', {
        steamId: this.steamId,
        raceNumber: this.raceNumber,
        serveradmin: this.serveradmin
      });
    },
    async commitChangesToServer() {
      this.isLoading = true;
      await this.$store.dispatch('entryList/commitChangesToServer');
      this.isLoading = false;
    }
  },
  computed: {
    entries() {
      return this.$store.getters['entryList/getEntryList'];
    }
  },
  async created() {
    this.loadData();
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables.scss';

.bg {
  background-color: $darkblue;
}
</style>