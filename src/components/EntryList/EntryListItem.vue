<template>
  <tr>
    <td>{{ steamId }}</td>
    <td>{{ username }}</td>
    <td>{{ racenumber }}</td>
    <td>
      <input
        type="checkbox"
        :checked="isServerAdmin"
        @change="updateAdminState"
      />
    </td>
    <td>
      <button class="button is-small is-danger is-light" @click="deleteItem">
        Remove
      </button>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    steamId: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    racenumber: {
      type: Number,
      default: -1
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isServerAdmin: this.admin
    };
  },
  methods: {
    async updateAdminState() {
      this.isServerAdmin = !this.isServerAdmin;

      await this.$store.dispatch('entryList/updateEntry', {
        steamId: this.steamId,
        isServerAdmin: this.isServerAdmin
      });
    },
    async deleteItem() {
      await this.$store.dispatch('entryList/removeEntry', {
        steamId: this.steamId
      });
    }
  }
};
</script>