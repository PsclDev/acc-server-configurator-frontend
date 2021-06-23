<template>
  <p>{{ driver.name }}</p>
  <p>{{ driver.shortName }}</p>
</template>

<script>
export default {
  props: ['driver']
};
</script>