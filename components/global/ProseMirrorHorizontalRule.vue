<template>
  <hr v-bind="node.attrs" />
</template>

<script setup lang="ts">
import { JsonNode } from "../../prosemirror.schema";
defineProps<{ node: JsonNode }>();
</script>
