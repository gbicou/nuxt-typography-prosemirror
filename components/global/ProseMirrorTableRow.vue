<template>
  <prose-tr :id="hash(node)" v-bind="node.attrs">
    <slot />
  </prose-tr>
</template>

<script setup lang="ts">
import type { JsonNode } from "../../types";
import { hash } from "ohash";

defineProps<{ node: JsonNode }>();
</script>
