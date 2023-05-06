<template>
  <prose-code-inline :id="hash(node)" v-bind="node.attrs">
    <slot />
  </prose-code-inline>
</template>

<script setup lang="ts">
import { JsonNode } from "../../prosemirror.schema";
import { hash } from "ohash";

defineProps<{ node: JsonNode }>();
</script>
