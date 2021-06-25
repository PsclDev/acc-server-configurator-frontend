<template>
  <base-card class="py-1 px-4">
    <div class="is-flex is-flex-direction-column">
      <p class="has-text-weight-bold is-size-7">Fullname:</p>
      <p>{{ driver.name }}</p>
    </div>

    <div class="is-flex is-flex-direction-column">
      <p class="has-text-weight-bold is-size-7">Shortname:</p>
      <p>{{ driver.shortName }}</p>
    </div>
  </base-card>
</template>

<script>
export default {
  props: ['driver']
};
</script>