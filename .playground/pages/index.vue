<script setup lang="ts">
const { myLayer } = useAppConfig()
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <prose-code><pre>{{ myLayer }}</pre></prose-code>
  </div>
</template>
