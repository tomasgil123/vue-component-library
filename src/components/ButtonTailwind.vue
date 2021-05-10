<template>
  <button class="rounded-lg border block inline-flex items-center justify-center w-32" >{{text}}</button>
</template>

<script>
export default {
  name: 'ButtonTailwind',
  props: {
    text: String
  }
}
</script>