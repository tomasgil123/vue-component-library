<template>
  <div class="sample-component-container">
    <h2>{{ headingText }}</h2>
    <h3>{{ bodyText }}</h3>
  </div>
</template>

<script>
export default {
  name: 'SampleComponent',
  props: {
    headingText: String,
    bodyText: String
  }
}
</script>

<style lang="scss">

@import 'src/assets/_variables.scss';

.sample-component-container {
  padding: 40px;
  background-color: black;
  color: $primary-color;
}

</style>