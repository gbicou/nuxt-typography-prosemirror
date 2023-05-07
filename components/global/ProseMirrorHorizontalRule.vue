<template>
  <hr v-bind="node.attrs" />
</template>

<script setup lang="ts">
import type { JsonNode } from "../../types";
defineProps<{ node: JsonNode }>();
</script>
