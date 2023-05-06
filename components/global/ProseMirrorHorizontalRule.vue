<template>
  <hr v-bind="node.attrs" />
</template>

<script setup lang="ts">
import { JsonNode } from "../../types";
defineProps<{ node: JsonNode }>();
</script>
