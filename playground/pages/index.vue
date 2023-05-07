<script setup lang="ts">
const { typographyProsemirror } = useAppConfig();
</script>

<template>
  <div>
    <h1>Hello World!</h1>
    <prose-code>
      <pre>{{ typographyProsemirror }}</pre>
    </prose-code>
  </div>
</template>
