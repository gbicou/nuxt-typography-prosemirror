<template>
  <prose-table :id="hash(node)" v-bind="node.attrs">
    <prose-tbody><slot /></prose-tbody>
  </prose-table>
</template>

<script setup lang="ts">
import { JsonNode } from "../../types";
import { hash } from "ohash";

defineProps<{ node: JsonNode }>();
</script>
