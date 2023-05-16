<template>
  <component :is="`prose-h${level}`" v-bind="$attrs"><slot /></component>
</template>

<script setup lang="ts">
defineProps<{ level?: number }>();
</script>
